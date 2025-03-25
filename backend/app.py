from flask import Flask, jsonify, request, send_from_directory
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta, datetime
from flask_cors import CORS
import os
from dotenv import load_dotenv
import re

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.debug = True
app.static_folder = "../MSSN-ABUAD/backend/dist"
app.static_url_path = "/"

# Configure SQLite DB
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///mssn.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure JWT
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'fallback-secret')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['JWT_TOKEN_LOCATION'] = ['headers']
jwt = JWTManager(app)

CORS(app, origins=["*"])

# Simulated admin users
admins = {
    "admin1": {"password": "password123"},
    "admin2": {"password": "securepass"}
}

# Prayer Times Model (unchanged from your original)
class PrayerTimes(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fajr_adhan = db.Column(db.String(50), nullable=False)
    fajr_iqama = db.Column(db.String(50), nullable=False)
    dhuhr_adhan = db.Column(db.String(50), nullable=False)
    dhuhr_iqama = db.Column(db.String(50), nullable=False)
    asr_adhan = db.Column(db.String(50), nullable=False)
    asr_iqama = db.Column(db.String(50), nullable=False)
    maghrib_adhan = db.Column(db.String(50), nullable=False)
    maghrib_iqama = db.Column(db.String(50), nullable=False)
    isha_adhan = db.Column(db.String(50), nullable=False)
    isha_iqama = db.Column(db.String(50), nullable=False)
    jumuah_adhan = db.Column(db.String(50), nullable=True)
    jumuah_iqama = db.Column(db.String(50), nullable=True)

# Create the database
with app.app_context():
    db.create_all()

# Time validation helper
def validate_time_format(time_str):
    return re.match(r'^([01]\d|2[0-3]):[0-5]\d$', time_str) is not None

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username not in admins or admins[username]["password"] != password:
        return jsonify({"message": "Invalid credentials"}), 401

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

@app.route('/api/prayer-times', methods=['GET'])
def get_prayer_times():
    # Get the most recent prayer times entry
    prayer_time = PrayerTimes.query.order_by(PrayerTimes.id.desc()).first()
    if not prayer_time:
        return jsonify({"message": "No prayer times found"}), 404
    
    return jsonify({
        "fajr": {"adhan": prayer_time.fajr_adhan, "iqama": prayer_time.fajr_iqama},
        "dhuhr": {"adhan": prayer_time.dhuhr_adhan, "iqama": prayer_time.dhuhr_iqama},
        "asr": {"adhan": prayer_time.asr_adhan, "iqama": prayer_time.asr_iqama},
        "maghrib": {"adhan": prayer_time.maghrib_adhan, "iqama": prayer_time.maghrib_iqama},
        "isha": {"adhan": prayer_time.isha_adhan, "iqama": prayer_time.isha_iqama},
        "jumuah": {"adhan": prayer_time.jumuah_adhan, "iqama": prayer_time.jumuah_iqama}
    })

@app.route('/api/prayer-times', methods=['POST'])
@jwt_required()
def add_prayer_time():
    try:
        # First delete all existing prayer times
        db.session.query(PrayerTimes).delete()
        db.session.commit()
        
        data = request.json
        print("Received data:", data)  # Debug log

        # Validate required fields
        required_fields = [
            'fajr_adhan', 'fajr_iqama',
            'dhuhr_adhan', 'dhuhr_iqama', 
            'asr_adhan', 'asr_iqama',
            'maghrib_adhan', 'maghrib_iqama',
            'isha_adhan', 'isha_iqama'
        ]
        
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
            if not validate_time_format(data[field]):
                return jsonify({"error": f"Invalid time format for {field}"}), 400

        # Create new prayer time
        new_time = PrayerTimes(
            fajr_adhan=data['fajr_adhan'],
            fajr_iqama=data['fajr_iqama'],
            dhuhr_adhan=data['dhuhr_adhan'],
            dhuhr_iqama=data['dhuhr_iqama'],
            asr_adhan=data['asr_adhan'],
            asr_iqama=data['asr_iqama'],
            maghrib_adhan=data['maghrib_adhan'],
            maghrib_iqama=data['maghrib_iqama'],
            isha_adhan=data['isha_adhan'],
            isha_iqama=data['isha_iqama'],
            jumuah_adhan=data.get('jumuah_adhan'),
            jumuah_iqama=data.get('jumuah_iqama')
        )
        
        db.session.add(new_time)
        db.session.commit()

        return jsonify({
            "message": "Prayer times updated successfully",
            "id": new_time.id
        }), 201

    except Exception as e:
        db.session.rollback()
        print("Error:", str(e))  # Debug log
        return jsonify({"error": str(e)}), 500

@app.route('/api/prayer-times/<int:id>', methods=['PUT'])
@jwt_required()
def update_prayer_time(id):
    data = request.json
    prayer_time = PrayerTimes.query.get_or_404(id)

    # Validate time formats
    time_fields = [
        'fajr_adhan', 'fajr_iqama',
        'dhuhr_adhan', 'dhuhr_iqama',
        'asr_adhan', 'asr_iqama',
        'maghrib_adhan', 'maghrib_iqama',
        'isha_adhan', 'isha_iqama'
    ]
    
    for field in time_fields:
        if field in data and not validate_time_format(data[field]):
            return jsonify({"error": f"Invalid time format for {field}"}), 400

    # Update fields
    prayer_time.fajr_adhan = data.get('fajr_adhan', prayer_time.fajr_adhan)
    prayer_time.fajr_iqama = data.get('fajr_iqama', prayer_time.fajr_iqama)
    prayer_time.dhuhr_adhan = data.get('dhuhr_adhan', prayer_time.dhuhr_adhan)
    prayer_time.dhuhr_iqama = data.get('dhuhr_iqama', prayer_time.dhuhr_iqama)
    prayer_time.asr_adhan = data.get('asr_adhan', prayer_time.asr_adhan)
    prayer_time.asr_iqama = data.get('asr_iqama', prayer_time.asr_iqama)
    prayer_time.maghrib_adhan = data.get('maghrib_adhan', prayer_time.maghrib_adhan)
    prayer_time.maghrib_iqama = data.get('maghrib_iqama', prayer_time.maghrib_iqama)
    prayer_time.isha_adhan = data.get('isha_adhan', prayer_time.isha_adhan)
    prayer_time.isha_iqama = data.get('isha_iqama', prayer_time.isha_iqama)
    prayer_time.jumuah_adhan = data.get('jumuah_adhan', prayer_time.jumuah_adhan)
    prayer_time.jumuah_iqama = data.get('jumuah_iqama', prayer_time.jumuah_iqama)
    
    db.session.commit()

    return jsonify({"message": "Prayer times updated successfully"})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=5000)