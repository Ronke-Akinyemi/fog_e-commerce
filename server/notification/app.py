from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import path


app = Flask(__name__)
CORS(app)
DB_NAME = "notification.db"
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'

db = SQLAlchemy(app)

def create_database(app):
    if not path.exists('notification/' + DB_NAME):
        with app.app_context():
            db.create_all()
        print("Created Database")
create_database(app)

from views import views
app.register_blueprint(views, url_prefix='/')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="5000")
