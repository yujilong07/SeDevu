from app import db
from datetime import datetime

# email
# password
# first_name
# last_name
# last_active


class User(db.Model):
    __tablename__ = 'user'

    pid = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable = False)
    last_name = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False )
    password = db.Column(db.String, nullable = False )
    last_active = db.Column(db.DateTime, default=datetime.utcnow )
    role = db.Column(db.String)


    