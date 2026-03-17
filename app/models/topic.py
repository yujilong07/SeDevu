from app import db
from datetime import datetime


# id
# user_id (foreign key)
# title
# priority — число від 1 до 5
# status — enum: not_started, in_progress, completed
# created_at

class Topic(db.Model):
    __tablename__ = 'topic'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.pid"))
    title = db.Column(db.String, nullable = False)
    priority = db.Column(db.Integer)
    status = db.Column(db.Enum('not_started', 'in_progress', 'completed'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
