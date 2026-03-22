from flask import Blueprint, jsonify, request
from app import db
from sqlalchemy import func
from app.models.topic import Topic
from app.models.progress import Progress
from app.models.user import User
from app.models.streak import Streak
from flask_jwt_extended import jwt_required, get_jwt_identity

stat_bp = Blueprint('statistics', __name__)

@stat_bp.route('/show_stats', methods = ['GET'])
@jwt_required()
def show_stat():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()

    all_top = Topic.query.filter_by(user_id=user.pid).count()
    completed_top = Topic.query.filter_by(user_id=user.pid, status='completed').count()
    not_started_top = Topic.query.filter_by(user_id=user.pid, status='not_started').count()
    inprog_top = Topic.query.filter_by(user_id=user.pid, status='in_progress').count()
    summary = Progress.query.filter_by(user_id=user.pid).count()
    most_active = Progress.query.with_entities(Progress.topic_id, func.count(Progress.note)).group_by(Progress.topic_id).first()
    streak = Streak.query.filter_by(user_id=user.pid).first()  

    return jsonify({
    "All_topics": all_top,
    "Completed": completed_top,
    "Not started": not_started_top,
    "In progress": inprog_top,
    "Summary": summary,
    "Most active": {"topic_id": most_active[0], "count": most_active[1]} if most_active else None,
    "current_streak": streak.current_streak if streak else 0,
    "longest_streak": streak.longest_streak if streak else 0
    })