from app import db
from datetime import datetime


# id
# user_id (foreign key)
# current_streak — скільки днів підряд зараз
# longest_streak — рекорд
# last_activity_date — останній день активності

class Streak(db.Model):
    __tablename__ = 'streak'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.pid"))
    current_streak = db.Column(db.Integer, nullable = False )
    longest_streak = db.Column(db.Integer, nullable = False )
    last_activity_date = db.Column(db.DateTime, default=datetime.utcnow )