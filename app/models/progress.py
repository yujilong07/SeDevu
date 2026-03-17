from app import db
from datetime import datetime

# id
# topic_id (foreign key)
# user_id (foreign key)
# note — що конкретно зробив
# date — коли зробив

class Progress(db.Model):
    __tablename__ = 'progress'

    id = db.Column(db.Integer, primary_key=True)
    topic_id = db.Column(db.Integer, db.ForeignKey("topic.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.pid"))
    note = db.Column(db.String, nullable = False )
    date = db.Column(db.DateTime, default=datetime.utcnow )
