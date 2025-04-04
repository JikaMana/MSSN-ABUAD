from flask import Flask, jsonify, request, send_from_directory
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from datetime import timedelta
from flask_cors import CORS
import os
from dotenv import load_dotenv
import re
from flask_migrate import Migrate

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.debug = True
app.static_folder = "../MSSN-ABUAD/backend/dist"  # Path to React build
app.static_url_path = "/"
# Configure SQLite DB
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///mssn.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure JWT
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'fallback-secret')
# app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['JWT_TOKEN_LOCATION'] = ['headers']
jwt = JWTManager(app)

CORS(app, origins=["*"])
migrate = Migrate(app, db)
# Simulated admin users
admins = {
    "admin1": {"password": "password123"},
    "mssnabuad@gmail.com": {"password": "mssnlogin"}
}


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')


# Prayer Times Model
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
    data = request.json

    # Validate time formats
    time_fields = [
        'fajr_adhan', 'fajr_iqama',
        'dhuhr_adhan', 'dhuhr_iqama',
        'asr_adhan', 'asr_iqama',
        'maghrib_adhan', 'maghrib_iqama',
        'isha_adhan', 'isha_iqama'
    ]

    for field in time_fields:
        if not validate_time_format(data.get(field, '')):
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

    return jsonify({"message": "Prayer times added successfully"}), 201


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


# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)


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


# Blog Model (simplified)
class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    blog = db.Column(db.Text, nullable=False)  # Changed to Text for longer content
    summary = db.Column(db.String(500), nullable=False)
    read_time = db.Column(db.Integer, nullable=False, default=5)
    image_url = db.Column(db.String(500), nullable=True)


# Blog Endpoints
@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    blogs = Blog.query.order_by(Blog.id.desc()).all()  # Newest first
    return jsonify([{
        'id': b.id,
        'title': b.title,
        'author': b.author,
        'blog': b.blog,
        'summary': b.summary,
        'read_time': b.read_time,
        'image_url': b.image_url

    } for b in blogs])


@app.route('/api/blogs', methods=['POST'])
@jwt_required()
def add_blog():
    data = request.json
    try:
        new_blog = Blog(
            title=data['title'],
            author=data['author'],
            blog=data['content'],
            summary=data['summary'],
            read_time=int(data['read_time']),
            image_url=data['image_url']
        )
        db.session.add(new_blog)
        db.session.commit()
        return jsonify({"message": "Blog added successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/blogs/<int:id>', methods=['PUT'])
@jwt_required()
def update_blog(id):
    blog = Blog.query.get_or_404(id)
    data = request.json
    try:
        blog.title = data.get('title', blog.title)
        blog.author = data.get('author', blog.author)
        blog.blog = data.get('blog', blog.blog)
        blog.summary = data.get('summary', blog.summary)
        blog.read_time = data.get('read_time', blog.read_time)
        blog.image_url = data.get('image_url', blog.image_url)
        db.session.commit()
        return jsonify({"message": "Blog updated successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/blogs/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_blog(id):
    blog = Blog.query.get_or_404(id)
    try:
        db.session.delete(blog)
        db.session.commit()
        return jsonify({"message": "Blog deleted successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Event Model
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    summary = db.Column(db.String(500), nullable=False)
    content = db.Column(db.Text, nullable=False)
    date = db.Column(db.String(10), nullable=False)  # YYYY-MM-DD format
    time = db.Column(db.String(5), nullable=False)  # HH:MM format
    availability = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)


# Event Endpoints
@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.order_by(Event.id.desc()).all()
    return jsonify([{
        'id': e.id,
        'title': e.title,
        'summary': e.summary,
        'content': e.content,
        'date': e.date,
        'time': e.time,
        'availability': e.availability,
        'image_url': e.image_url
    } for e in events])


@app.route('/api/events', methods=['POST'])
@jwt_required()
def add_event():
    data = request.json
    try:
        # Validate required fields
        required_fields = ['title', 'summary', 'content', 'date', 'time', 'availability']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        # Validate date/time formats
        if not re.match(r'^\d{4}-\d{2}-\d{2}$', data['date']):
            return jsonify({"error": "Invalid date format. Use YYYY-MM-DD"}), 400

        if not re.match(r'^([01]\d|2[0-3]):[0-5]\d$', data['time']):
            return jsonify({"error": "Invalid time format. Use HH:MM"}), 400

        new_event = Event(
            title=data['title'],
            summary=data['summary'],
            content=data['content'],
            date=data['date'],
            time=data['time'],
            availability=data['availability'],
            image_url=data.get('image_url')
        )

        db.session.add(new_event)
        db.session.commit()
        return jsonify({"message": "Event created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/events/<int:id>', methods=['PUT'])
@jwt_required()
def update_event(id):
    event = Event.query.get_or_404(id)
    data = request.json

    try:
        # Update fields
        if 'title' in data: event.title = data['title']
        if 'summary' in data: event.summary = data['summary']
        if 'content' in data: event.content = data['content']
        if 'date' in data:
            if not re.match(r'^\d{4}-\d{2}-\d{2}$', data['date']):
                return jsonify({"error": "Invalid date format"}), 400
            event.date = data['date']
        if 'time' in data:
            if not re.match(r'^([01]\d|2[0-3]):[0-5]\d$', data['time']):
                return jsonify({"error": "Invalid time format"}), 400
            event.time = data['time']
        if 'availability' in data: event.availability = data['availability']
        if 'image_url' in data: event.image_url = data['image_url']

        db.session.commit()
        return jsonify({"message": "Event updated successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/events/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_event(id):
    event = Event.query.get_or_404(id)
    try:
        db.session.delete(event)
        db.session.commit()
        return jsonify({"message": "Event deleted successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# News Model
class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)
    summary = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(500), nullable=True)


# News Endpoints
@app.route('/api/news', methods=['GET'])
def get_news():
    news = News.query.order_by(News.id.desc()).all()
    return jsonify([{
        'id': n.id,
        'title': n.title,
        'author': n.author,
        'content': n.content,
        'summary': n.summary,
        'image_url': n.image_url
    } for n in news])


@app.route('/api/news', methods=['POST'])
@jwt_required()
def add_news():
    data = request.json
    try:
        new_news = News(
            title=data['title'],
            author=data['author'],
            content=data['blog'],  # Matches the React form field name
            summary=data['summary'],
            image_url=data.get('image_url')
        )
        db.session.add(new_news)
        db.session.commit()
        return jsonify({"message": "News added successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/news/<int:id>', methods=['PUT'])
@jwt_required()
def update_news(id):
    news_item = News.query.get_or_404(id)
    data = request.json
    try:
        news_item.title = data.get('title', news_item.title)
        news_item.author = data.get('author', news_item.author)
        news_item.content = data.get('blog', news_item.content)
        news_item.summary = data.get('summary', news_item.summary)
        news_item.image_url = data.get('image_url', news_item.image_url)
        db.session.commit()
        return jsonify({"message": "News updated successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@app.route('/api/news/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_news(id):
    news_item = News.query.get_or_404(id)
    try:
        db.session.delete(news_item)
        db.session.commit()
        return jsonify({"message": "News deleted successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Create the database tables
with app.app_context():
    try:
        db.create_all()
        print("Database tables created successfully!")
    except Exception as e:
        print(f"Error creating database tables: {e}")

if __name__ == '__main__':
    from waitress import serve

    serve(app, host="0.0.0.0", port=5000)
