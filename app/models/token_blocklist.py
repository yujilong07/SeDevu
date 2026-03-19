from app import db
from datetime import datetime

class Token_BL(db.Model):
    __tablename__ = 'token_bl'

    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String, nullable = False )
    created_at = db.Column(db.DateTime, default=datetime.utcnow )

