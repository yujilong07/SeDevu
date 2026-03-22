from flask import Blueprint, jsonify, request
from app import db
from app.models.topic import Topic
from app.models.progress import Progress
from app.models.user import User
from flask_jwt_extended import jwt_required, get_jwt_identity


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