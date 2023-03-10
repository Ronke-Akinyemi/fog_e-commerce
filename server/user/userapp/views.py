from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework import generics, status

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

