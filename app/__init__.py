from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from datetime import timedelta

import os
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()
bcrypt = Bcrypt()

ACCESS_EXPIRES = timedelta(hours=1)

jwt = JWTManager()

def create_app():
    app = Flask(__name__, template_folder='templates')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_CONFIG')
    app.secret_key = os.getenv('SECRET_KEY')
    db.init_app(app)
    from app import models

    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    from app.routes.topics import topic_bp
    app.register_blueprint(topic_bp)

    from app.routes.progress import prog_bp
    app.register_blueprint(prog_bp)

    migrate = Migrate(app, db)
    
    bcrypt.init_app(app)

    app.config["JWT_SECRET_KEY"] = os.getenv('JWT_PASS')  
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = ACCESS_EXPIRES
    jwt.init_app(app)

    from app.models.token_blocklist import Token_BL
    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
        jti = jwt_payload["jti"]
        token = db.session.query(Token_BL.id).filter_by(jti=jti).scalar()

        return token is not None

    return app