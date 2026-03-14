from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import os
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder='templates')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('BD_CONFIG')
    app.secret_key = os.getenv('SECRET_KEY')
    db.init_app(app)

    from app.routes.test import test_page
    app.register_blueprint(test_page)

    migrate = Migrate(app, db)
    
    return app