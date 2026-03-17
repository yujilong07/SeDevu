from app import db
from datetime import datetime


# id
# user_id (foreign key)
# topic_id (foreign key, nullable) — нотатка може бути прив'язана до теми або просто загальна
# title
# content
# created_at

class Note(db.Model):
    __tablename__ = 'note'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.pid"))
    topic_id = db.Column(db.Integer, db.ForeignKey("topic.id"))
    title = db.Column(db.String, nullable = False )
    content = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)