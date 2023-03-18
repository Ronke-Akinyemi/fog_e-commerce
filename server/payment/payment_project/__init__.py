from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import path
from fastapi_utils.guid_type import GUID, GUID_DEFAULT_SQLITE
from datetime import datetime

db = SQLAlchemy()
DB_NAME = "payment.db"
# hL#YDHFCnRPY

class Payment(db.Model):
    __tablename__ = "payments"
    id = db.Column(GUID, primary_key=True, default=GUID_DEFAULT_SQLITE)
    email = db.Column(db.String(120),nullable=False)
    date = db.Column(db.DateTime, nullable= False, default=datetime.utcnow)
    ref = db.Column(db.Integer(), unique=True, nullable=False)
    amount = db.Column(db.Integer(), nullable=False)

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    from .views import views
    app.register_blueprint(views, url_prefix='/')
    create_database(app)
    return app

def create_database(app):
    if not path.exists('payment/' + DB_NAME):
        with app.app_context():
            db.create_all()

app = create_app()
CORS(app)