from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from flask_cors import CORS
import os

app = Flask(__name__)

# Configure JWT
app.config['JWT_SECRET_KEY'] = os.urandom(24)
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)  # Token expires in 1 hour
app.config['JWT_TOKEN_LOCATION'] = ['headers']
jwt = JWTManager(app)

# Enable CORS
# CORS(app, origins="http://localhost:5173")
CORS(app,origins="*")



# Simulated admin users (in-memory storage)
admins = {
    "admin1": {"password": "password123"},
    "admin2": {"password": "securepass"}
}
@app.route('/')
def home():
    return "WELCOME TO MSSN ABUAD"

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username not in admins or admins[username]["password"] != password:
        return jsonify({"message": "Invalid credentials"}), 401

    # Generate JWT token
    access_token = create_access_token(identity=username)
    return jsonify({
        "message": "Login successful",
        "token": access_token
    })

@app.route('/api/check-auth', methods=['GET'])
@jwt_required()
def check_auth():
    current_user = get_jwt_identity()
    return jsonify({
        "authenticated": True,
        "username": current_user
    })

if __name__ == '__main__':
    app.run(debug=True)