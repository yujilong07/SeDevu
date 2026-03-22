from flask import Blueprint, jsonify, request
from app import db
from app.models.user import User
from app.models.topic import Topic
from flask_jwt_extended import jwt_required, get_jwt_identity

topic_bp = Blueprint('topic', __name__)

@topic_bp.route('/lot', methods=['GET'] ) # list of topics
@jwt_required()
def get_listof_top():

    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    topics = Topic.query.filter_by(user_id=user.pid).all()

    result = [{"id": t.id, "title": t.title, "priority": t.priority, 
               "status": t.status, "time of creation": t.created_at} for t in topics]

    return jsonify(result)

@topic_bp.route('/make_top', methods = ['POST'])
@jwt_required()
def make_topic():
        data = request.get_json()

        title = data.get("title")
        priority = data.get("priority")

        if not title:
                return jsonify({"error": "Missing required fields"}), 400
        elif priority is None:
                return jsonify({"error": "Priority should be between 1 and 5"}), 400
        
        existing_topic = Topic.query.filter_by(title=title).all()
        if existing_topic:
                # later remake on login if the same user is already exists
                return jsonify({"error": "Topic already exists"}), 409

        email = get_jwt_identity()
        user = User.query.filter_by(email=email).first()


        
        new_topic = Topic(
        user_id=user.pid,
        title=title,
        priority=priority
        )
        
        db.session.add(new_topic)
        db.session.commit()

        return jsonify({"message": "Topic created successfully"}), 201


@topic_bp.route('/update_top/<id>', methods = ['PATCH'])
@jwt_required()
def update_topic(id):
       data = request.get_json()

       new_title = data.get('new_title')
       new_priority = data.get('new_priority')
       new_status = data.get('new_status')

       email = get_jwt_identity()
       user = User.query.filter_by(email=email).first()
       if not user:
              return jsonify({"Error": "You cannot access topics if you are not registered"}), 400
       topic = Topic.query.filter_by(id=id, user_id=user.pid).first()
       if not topic:
                return jsonify({"Error": "You cannot update topic if there were not before it"}),400

       if new_title is not None:
                topic.title = new_title
       if new_priority is not None:
                topic.priority = new_priority
       if new_status is not None:
                topic.status = new_status
       db.session.commit()
       return jsonify({"message": "Topic updated successfully"}), 200
       

@topic_bp.route('/delete_top/<id>', methods = ['DELETE'])
@jwt_required()
def delete_topic(id):
       email = get_jwt_identity()
       user = User.query.filter_by(email=email).first()
       if not user:
              return jsonify({"Error": "You cannot access topics if you are not registered"}), 400
       topic = Topic.query.filter_by(id=id, user_id=user.pid).first()
       if not topic:
                return jsonify({"Error": "You cannot delete topic if there were not before it"}), 400
       
       db.session.delete(topic)
       db.session.commit()
       return jsonify({"message": "Topic deleted successfully"}), 200
       