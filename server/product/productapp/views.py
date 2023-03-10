from django.shortcuts import render
from .models import Bird, Crop, Equipment
from .serializers import BirdSerializer, CropSerializer, EquipmentSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

class BirdView(generics.GenericAPIView):
    serializer_class = BirdSerializer
    queryset = Bird.objects.all()
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
        bird = get_object_or_404(Bird, pk = pk)
        bird.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)

class CropView(generics.GenericAPIView):
    serializer_class = CropSerializer
    queryset = Crop.objects.all()
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
    queryset = Equipment.objects.all()
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
        return Response(data= serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        equipment = get_object_or_404(Equipment, pk = pk)
        equipment.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)

