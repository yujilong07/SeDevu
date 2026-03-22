from flask import Blueprint, jsonify, request
from app import db
from app.models.topic import Topic
from app.models.progress import Progress
from app.models.user import User
from app.models.streak import Streak
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import date

prog_bp = Blueprint('progress', __name__)

@prog_bp.route('/write_progress/<topic_id>', methods = ['POST'])
@jwt_required()
def write_progress(topic_id):
    data = request.get_json()

    note = data.get('note')

    existing_topic = Topic.query.filter_by(id=topic_id).all()
    if not existing_topic:
                # later remake on login if the same user is already exists
        return jsonify({"error": "You cannot write any log before topic is created"}), 400

    if not note:
        return jsonify({"error": "Missing required fields"}), 400
    
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    new_log = Progress(user_id=user.pid, topic_id=topic_id, note=note)
        
    db.session.add(new_log)
    db.session.commit()

    streak = Streak.query.filter_by(user_id=user.pid).first()
    today = date.today()

    if streak is None:
        new_streak = Streak(user_id=user.pid, current_streak=1, 
                        longest_streak=1, last_activity_date=today)
        db.session.add(new_streak)
    else:
        diff = (today - streak.last_activity_date.date()).days
        if diff == 0:
            pass  
        elif diff == 1:
            streak.current_streak += 1 
        else:
            streak.current_streak = 1 
        
        if streak.current_streak > streak.longest_streak:
            streak.longest_streak = streak.current_streak
        
        streak.last_activity_date = today

    db.session.commit()

    return jsonify({"message": "Log created successfully"}), 201

@prog_bp.route('/get_progress/<topic_id>', methods = ['GET'])
@jwt_required()
def show_log_history(topic_id):
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    log = Progress.query.filter_by(user_id=user.pid, topic_id=topic_id).all()

    result = [{"id": l.id,"note": l.note, 
         "time of creation": l.date} for l in log]

    return jsonify(result)

@prog_bp.route('/delete_log/<topic_id>', methods = ['DELETE'])
@jwt_required()
def delete_log(topic_id):
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"Error": "You cannot get access to log history if you are not registered"}), 400
    log = Progress.query.filter_by(user_id=user.pid, id=topic_id).first()
    if not log:
        return jsonify({"Error": "You cannot delete topic if there were not before it"}), 400
    
    db.session.delete(log)
    db.session.commit()
    return jsonify({"message": "Log deleted successfully"}), 200