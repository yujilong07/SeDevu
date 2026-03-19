from flask import Blueprint, jsonify, request
from app import db, bcrypt
from app.models.user import User
from app.models.token_blocklist import Token_BL
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from datetime import timezone, datetime



auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/register', methods=['POST'])
def register():
        data = request.get_json()

        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        password = data.get("password")

        if not first_name or not email or not password:
                return jsonify({"error": "Missing required fields"}), 400
        elif len(email) < 4:
                return jsonify({"error": "Email should be longer than 3 symbols"}), 400
        elif len(password) < 4:
                return jsonify({"error": "Missing required fields"}), 400
        
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
                # later remake on login if the same user is already exists
                return jsonify({"error": "User already exists"}), 409

        new_user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=bcrypt.generate_password_hash(password).decode('utf-8'))  # later add hash-pass --- added
        
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User created successfully"}), 201


@auth_bp.route('/login', methods=['POST'])
def login():

        email = request.json.get("email", None)
        password = request.json.get("password", None)

        existing_user = User.query.filter_by(email=email).first()
        if existing_user is None:
                return jsonify({"error": "The user was not found, you should register firstly"})
        elif not bcrypt.check_password_hash(existing_user.password, password):
                return jsonify({"msg": "Original Password is not matching with yours, try again "}), 401

        else:
        
                access_token = create_access_token(identity=email)

                return jsonify(access_token=access_token)
        

@auth_bp.route("/logout", methods=["DELETE"])
@jwt_required()
def modify_token():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    db.session.add(Token_BL(jti=jti, created_at=now))
    db.session.commit()
    return jsonify(msg="JWT revoked")

                        


        

