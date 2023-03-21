from django.shortcuts import render
from .models import Bird, Crop, Equipment
from .serializers import BirdSerializer, CropSerializer, EquipmentSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
import json
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
# Create your views here.



class UserCreateView(generics.GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status = status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(data = serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class AllProductView(ObjectMultipleModelAPIView):
    querylist = [
        {'queryset': Bird.objects.all(),
        "serializer_class": BirdSerializer},
        {'queryset': Crop.objects.all(),
        "serializer_class": CropSerializer},
        {'queryset': Equipment.objects.all(),
        "serializer_class": EquipmentSerializer},
    ]
class BirdView(generics.GenericAPIView):
    serializer_class = BirdSerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    queryset = Bird.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        birds = Bird.objects.all()
        serializer = self.serializer_class(birds, many =True)
        # if serializer.is_valid():
        return Response(data= serializer.data, status =status.HTTP_200_OK)
        # return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_201_CREATED)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class SingleBirdView(generics.GenericAPIView):
    serializer_class = BirdSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    queryset = Bird.objects.all()
    def get(self, request, pk):
        bird = get_object_or_404(Bird, pk = pk)
        serializer = self.serializer_class(bird)
        return Response(data= serializer.data, status =status.HTTP_200_OK)
    def put(self, request, pk):
        bird = get_object_or_404(Bird, pk = pk)
        data = request.data
        serializer = self.serializer_class(data = data, instance = bird, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_200_OK)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        bird = get_object_or_404(Bird, pk=pk)
        bird.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)

class CropView(generics.GenericAPIView):
    serializer_class = CropSerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    queryset = Crop.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        crops = Crop.objects.all()
        serializer = self.serializer_class(crops, many =True)
        # if serializer.is_valid():
        return Response(data= serializer.data, status =status.HTTP_200_OK)
        # return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_201_CREATED)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class SingleCropView(generics.GenericAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    serializer_class = CropSerializer
    queryset = Crop.objects.all()
    def get(self, request, pk):
        crop = get_object_or_404(Crop, pk = pk)
        serializer = self.serializer_class(crop)
        return Response(data= serializer.data, status =status.HTTP_200_OK)
    def put(self, request, pk):
        crop = get_object_or_404(Crop, pk = pk)
        data = request.data
        serializer = self.serializer_class(data = data, instance = crop, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_200_OK)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        crop = get_object_or_404(Crop, pk = pk)
        crop.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)



class EquipView(generics.GenericAPIView):
    serializer_class = EquipmentSerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    queryset = Equipment.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request):
        equipments = Equipment.objects.all()
        serializer = self.serializer_class(equipments, many =True)
        # if serializer.is_valid():
        return Response(data= serializer.data, status =status.HTTP_200_OK)
        # return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_201_CREATED)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class SingleEquipView(generics.GenericAPIView):
    serializer_class = EquipmentSerializer
    queryset = Equipment.objects.all()
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self, request, pk):
        equipment = get_object_or_404(Equipment, pk = pk)
        serializer = self.serializer_class(equipment)
        return Response(data= serializer.data, status =status.HTTP_200_OK)
    def put(self, request, pk):
        equipment = get_object_or_404(Equipment, pk = pk)
        data = request.data
        serializer = self.serializer_class(data = data, instance = equipment, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status =status.HTTP_200_OK)
            console.log(serializer.errors)
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        equipment = get_object_or_404(Equipment, pk = pk)
        equipment.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
class GetPaymentHistory(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        url = "http://payment:5000"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)

class AllSubcribers(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        url = "http://payment:5000/sub"
        response = requests.get(url)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)
class GetPrices(APIView):
    def get (self, requests, pk):
        try:
            bird = Bird.objects.get(id=pk)
        except:
            bird = None
        try:
            crop = Crop.objects.get(id=pk)
        except:
            crop = None
        try:
            equip = Equipment.objects.get(id=pk)
        except:
            equip = None
        if bird:
            price = bird.price
            return Response(bird.price, status =status.HTTP_200_OK)
        elif crop:
            return Response(crop.price, status =status.HTTP_200_OK)
        elif equip:
            return Response(equip.price, status =status.HTTP_200_OK)
        else:
            return Response(data= {"message": "invalid id"}, status= status.HTTP_400_BAD_REQUEST)

class Newsletter(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        url = "http://payment:5000/news"
        headers = {"Content-type": "application/json"}
        data = json.dumps(request.data)
        response = requests.post(url, headers=headers, data=data)
        if response.status_code != 200:
            return Response(response.reason, status = response.status_code)
        return Response(response.json(), status = response.status_code)