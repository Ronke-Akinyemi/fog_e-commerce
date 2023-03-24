from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
import json
import requests

# Create your views here.

@api_view(["GET"])
def ping(request):
    message = {"reply": "ping"}
    return Response(message)



class AllProductView(APIView):
    def get(self, request):
        url = "http://localhost:8001"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)


class BirdView(APIView):
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    def get(self, request):
        url = "http://localhost:8001/bird"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class SingleBirdView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, pk):
        url = f"http://localhost:8001/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class CropView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        url = "http://localhost:8001/crop"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
class SingleCropView(APIView):
    def get(self, request, pk):
        url = f"http://localhost:8001/crop/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class EquipView(APIView):
    def get(self, request):
        url = "http://localhost:8001/equip"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class SingleEquipView(APIView):
    def get(self, request, pk):
        url = f"http://localhost:8001/equip/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class MakePayment(APIView):
    def post(self, request):
        url = "http://localhost:5000/pay"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class VerifyPayment(APIView):
    def get(self, request, pk):
        url = f"http://localhost:5000/verify/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class ContactMessage(APIView):
    def post(self, request):
        url = "http://localhost:5001/contact"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
class Subscibe(APIView):
    def post(self, request):
        url = "http://localhost:5001/sub"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class UnSubscibe(APIView):
    def post(self, request):
        url = "http://localhost:5001/unsub"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            print(response)
            return Response(response, status = response.status_code)
        return Response(response.json(), status = response.status_code)
