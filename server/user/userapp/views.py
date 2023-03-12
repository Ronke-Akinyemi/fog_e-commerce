from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
import json
import requests

# Create your views here.

@api_view(["GET"])
def ping(request):
    message = {"reply": "ping"}
    return Response(message)

class UserCreateView(generics.GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status = status.HTTP_201_CREATED)
        return Response(data = serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class BirdView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        url = "http://localhost:8001/bird"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def post(self, request):
        url = "http://localhost:8001/bird"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 201:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class SingleBirdView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, pk):
        url = f"http://localhost:8001/bird/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def delete(self, request, pk):
        url = f"http://localhost:8001/bird/{pk}"
        response = requests.get(url)
        if response.status_code != 204:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def put(self, request):
        url = f"http://localhost:8001/bird/{pk}"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
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
    def post(self, request):
        url = "http://localhost:8001/crop"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 201:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class SingleCropView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, pk):
        url = f"http://localhost:8001/crop/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def delete(self, request, pk):
        url = f"http://localhost:8001/crop/{pk}"
        response = requests.get(url)
        if response.status_code != 204:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def put(self, request):
        url = f"http://localhost:8001/crop/{pk}"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)


class EquipView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        url = "http://localhost:8001/equip"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def post(self, request):
        url = "http://localhost:8001/equip"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 201:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class SingleEquipView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, pk):
        url = f"http://localhost:8001/equip/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def delete(self, request, pk):
        url = f"http://localhost:8001/equip/{pk}"
        response = requests.get(url)
        if response.status_code != 204:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def put(self, request):
        url = f"http://localhost:8001/equip/{pk}"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)



class GetPaymentHistory(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        url = "http://localhost:5001"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class MakePayment(APIView):
    def post(self, request):
        url = "http://localhost:5001/pay"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class VerifyPayment(APIView):
    def get(self, request, pk):
        url = f"http://localhost:5001/verify/{pk}"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class ContactMessage(APIView):
    def post(self, request):
        url = "http://localhost:5002/contact"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
class Subscibe(APIView):
    def get(self, request):
        url = "http://localhost:5002/sub"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
    def post(self, request):
        url = "http://localhost:5002/sub"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)


class UnSubscibe(APIView):
    def post(self, request):
        url = "http://localhost:5002/unsub"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            print(response)
            return Response(response, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class Newsletter(APIView):
    def post(self, request):
        url = "http://localhost:5002/news"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)