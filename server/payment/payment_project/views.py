from flask import Blueprint, jsonify, request, abort
import os
import requests
import json
import random

from dotenv import load_dotenv
load_dotenv()
views = Blueprint("",__name__)


def generateReferenceNumber():
    return random.randrange(1111111111, 9999999999)

@views.route("/")
def home():
    from . import Payment
    all = Payment.query.all()
    payment_history = []
    for payment in all:
        pay = {}
        pay["ref"] = payment.ref
        pay["date"] = payment.date
        pay["amount"] = payment.amount
        pay["email"] = payment.email
        payment_history.append(pay)
    return jsonify(payment_history)


@views.route("/pay", methods=["POST"])
def pay():
    data = request.get_json()
    if not data:
        abort(400, description="Not a JSON")
    email = data.get("email")
    data = data.get("data")
    if not email or not data:
        abort(400, description = "invalid credentials")
    amount = 0
    for good in data:
        id = good["id"]
        quantity = good["quantity"]
        if not id or not quantity or not isinstance(quantity, int):
            abort(400, description= "incomplete details")
        url = f"http://product:8000/prices/{id}"
        response = requests.get(url)
        price = response.json()
        if response.status_code != 200:
            return jsonify({"message": "Product not available"})
        amount += (quantity * price)

    # return jsonify({"amount":amount})
    reference = generateReferenceNumber()
    amount = amount * 100
    data = {"email":email, "amount":amount, "reference":reference}
    url = 'https://api.paystack.co/transaction/initialize'
    headers = {"authorization": f"Bearer {os.getenv('PAYSTACK_SECRET_KEY')}"}
    r = requests.post(url, headers=headers, data=data)
    response = r.json()
    if not response['status']:
        abort(400, description = response['message'])

    return jsonify(response)

@views.route("/verify/<ref>")
def verify(ref):
    from . import Payment, db
    reference = ref
    ref_very = Payment.query.filter_by(ref = reference).first()
    if ref_very:
        return jsonify({"message": "payment verified"})
    url = 'https://api.paystack.co/transaction/verify/{}'.format(reference)
    headers = {"authorization": f"Bearer {os.getenv('PAYSTACK_SECRET_KEY')}"}
    r = requests.get(url, headers=headers)
    resp = r.json()
    if resp['data']['status'] != 'success':
        abort(400, description="Payment not succesful")
    email = resp['data']['customer']['email']
    amount = resp['data']['amount'] / 100
    payment = Payment(email = email, ref = reference, amount = amount)
    db.session.add(payment)
    db.session.commit()
    return jsonify({"message":"ok"}, 200)