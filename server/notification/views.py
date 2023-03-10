from flask import Blueprint, jsonify


views = Blueprint("",__name__)

@views.route("/")
def index():
    response = {"message": "ping"}
    return jsonify(response)