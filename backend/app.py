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
app.static_folder = "../MSSN-ABUAD/backend/dist"  # Path to React build
app.static_url_path="/"

# Configure SQLite DB
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///mssn.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure JWT
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'fallback-secret')  # Use environment variable
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['JWT_TOKEN_LOCATION'] = ['headers']
jwt = JWTManager(app)


# Enable CORS with environment-aware configuration
cors_origins = os.getenv('CORS_ORIGINS', 'http://localhost:5173').split(',')
CORS(app, origins=cors_origins)


# Simulated admin users (in-memory storage)
admins = {
    "admin1": {"password": "password123"},
    "admin2": {"password": "securepass"}
}
@app.route('/')
def home():
    return "WELCOME TO MSSN ABUAD"



# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)


# Prayer Times Model with unique constraint
class PrayerTimes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False, unique=True)

    # Fajr
    fajr_adhan = db.Column(db.String(50), nullable=False)
    fajr_iqama = db.Column(db.String(50), nullable=False)

    # Dhuhr
    dhuhr_adhan = db.Column(db.String(50), nullable=False)
    dhuhr_iqama = db.Column(db.String(50), nullable=False)

    # Asr
    asr_adhan = db.Column(db.String(50), nullable=False)
    asr_iqama = db.Column(db.String(50), nullable=False)

    # Maghrib
    maghrib_adhan = db.Column(db.String(50), nullable=False)
    maghrib_iqama = db.Column(db.String(50), nullable=False)

    # Isha
    isha_adhan = db.Column(db.String(50), nullable=False)
    isha_iqama = db.Column(db.String(50), nullable=False)

    # Jumuah (optional)
    jumuah_adhan = db.Column(db.String(50), nullable=True)
    jumuah_iqama = db.Column(db.String(50), nullable=True)


# Create the database
with app.app_context():
    db.create_all()


# Time validation helper
def validate_time_format(time_str):
    return re.match(r'^([01]\d|2[0-3]):[0-5]\d$', time_str) is not None


admins = {
    "admin1": {"password": "password123"},
    "admin2": {"password": "securepass"}
}


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


@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'image_url': p.image_url
    } for p in products])


@app.route('/api/products', methods=['POST'])
@jwt_required()
def add_product():
    data = request.json
    try:
        new_product = Product(
            name=data['name'],
            price=data['price'],
            description=data['description'],
            image_url=data.get('image_url')
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"message": "Product added successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/products/<int:id>', methods=['PUT'])
@jwt_required()
def update_product(id):
    product = Product.query.get_or_404(id)
    data = request.json
    try:
        product.name = data.get('name', product.name)
        product.price = data.get('price', product.price)
        product.description = data.get('description', product.description)
        product.image_url = data.get('image_url', product.image_url)
        db.session.commit()
        return jsonify({"message": "Product updated successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/products/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_product(id):
    product = Product.query.get_or_404(id)
    try:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message": "Product deleted successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/prayer-times', methods=['POST'])
@jwt_required()
def add_prayer_time():
    data = request.json
    try:
        # Validate date format
        date_obj = datetime.strptime(data['date'], "%Y-%m-%d").date()

        # Validate time formats
        time_fields = [
            'fajr_adhan', 'fajr_iqama',
            'dhuhr_adhan', 'dhuhr_iqama',
            'asr_adhan', 'asr_iqama',
            'maghrib_adhan', 'maghrib_iqama',
            'isha_adhan', 'isha_iqama'
        ]
        for field in time_fields:
            if not validate_time_format(data[field]):
                return jsonify({"error": f"Invalid time format for {field}"}), 400

        # Check for existing entry
        existing = PrayerTimes.query.filter_by(date=date_obj).first()
        if existing:
            return jsonify({"error": "Prayer times for this date already exist"}), 409

        new_time = PrayerTimes(
            date=date_obj,
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
        return jsonify({"message": "Prayer times added successfully"}), 201
    except KeyError as e:
        db.session.rollback()
        return jsonify({"error": f"Missing required field: {e}"}), 400
    except ValueError:
        db.session.rollback()
        return jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/prayer-times/latest', methods=['GET'])
def get_latest_prayer_time():
    latest_time = PrayerTimes.query.order_by(PrayerTimes.date.desc()).first()
    if not latest_time:
        return jsonify({})
    return jsonify({
        "date": latest_time.date.strftime("%Y-%m-%d"),
        "fajr": {"adhan": latest_time.fajr_adhan, "iqama": latest_time.fajr_iqama},
        "dhuhr": {"adhan": latest_time.dhuhr_adhan, "iqama": latest_time.dhuhr_iqama},
        "asr": {"adhan": latest_time.asr_adhan, "iqama": latest_time.asr_iqama},
        "maghrib": {"adhan": latest_time.maghrib_adhan, "iqama": latest_time.maghrib_iqama},
        "isha": {"adhan": latest_time.isha_adhan, "iqama": latest_time.isha_iqama},
        "jumuah": {"adhan": latest_time.jumuah_adhan, "iqama": latest_time.jumuah_iqama},
    })


@app.route('/api/prayer-times/<string:date>', methods=['PUT'])
@jwt_required()
def update_prayer_time(date):
    data = request.json
    try:
        date_obj = datetime.strptime(date, "%Y-%m-%d").date()
        prayer_time = PrayerTimes.query.filter_by(date=date_obj).first_or_404()

        # Validate time formats
        for field in data:
            if ('adhan' in field or 'iqama' in field) and not validate_time_format(data[field]):
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
        return jsonify({"message": "Prayer times updated successfully"}), 200
    except ValueError:
        return jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/prayer-times/<string:date_str>', methods=['GET'])
def get_prayer_time(date_str):
    try:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d").date()
        prayer_time = PrayerTimes.query.filter_by(date=date_obj).first()
        if not prayer_time:
            return jsonify({}), 404

        return jsonify({
            "date": prayer_time.date.strftime("%Y-%m-%d"),
            "fajr": {"adhan": prayer_time.fajr_adhan, "iqama": prayer_time.fajr_iqama},
            "dhuhr": {"adhan": prayer_time.dhuhr_adhan, "iqama": prayer_time.dhuhr_iqama},
            "asr": {"adhan": prayer_time.asr_adhan, "iqama": prayer_time.asr_iqama},
            "maghrib": {"adhan": prayer_time.maghrib_adhan, "iqama": prayer_time.maghrib_iqama},
            "isha": {"adhan": prayer_time.isha_adhan, "iqama": prayer_time.isha_iqama},
            "jumuah": {"adhan": prayer_time.jumuah_adhan, "iqama": prayer_time.jumuah_iqama},
        })
    except ValueError:
        return jsonify({"error": "Invalid date format"}), 400


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    from waitress import serve

    serve(app, host="0.0.0.0", port=5000)

# This is the app.py file and also is there a need to make adjustments in the components/prayertimes.jsx file?