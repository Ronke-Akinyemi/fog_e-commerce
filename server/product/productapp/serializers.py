from rest_framework import serializers
from .models import Bird, Crop, Equipment
from django.contrib.auth.hashers import make_password

from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password", "email"]

    def validate_password(self, value: str) -> str:
        """
        Hash value passed by user.

        :param value: password of a user
        :return: a hashed version of the password
        """
        return make_password(value)


option = (
        ("layers POL", "layers POL"),
        ("layers POC","layers POC"),
        ("layers DOC","layers DOC"),
        ("layers Spent","layers Spent"),
        ("Broiler DOC","Broiler DOC"),
        ("Broiler 8 weeks","Broiler 8 weeks"),
        ("Turkey DOC","Turkey DOC"),
        ("Others","Others"),
        ("Broiler Table Size","Broiler Table Size")
    )
crop_type = (
    ("maize", "maize"),
    ("cassava", "cassava"),
    ("yam", "yam"),
    ("Others","Others"),
    ("rice", "rice")
)
equip_type = (
    ("crop", "crop"),
    ("Others","Others"),
    ("animal", "animal")
)



class BirdSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    name = serializers.CharField(max_length = 100)
    type = serializers.ChoiceField(choices = option)
    quantity = serializers.IntegerField()
    price = serializers.IntegerField()
    age = serializers.CharField(max_length = 50)
    weight = serializers.CharField(max_length = 50)
    source = serializers.CharField(max_length = 250)
    info = serializers.CharField()
    image = serializers.ImageField(required= False)

    class Meta:
        model = Bird
        fields = ["id","name" ,"type", "quantity", "price", "age", "weight", "source", "info", "image"]

class CropSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    name = serializers.CharField(max_length = 100)
    type = serializers.ChoiceField(choices = crop_type)
    quantity = serializers.IntegerField()
    price = serializers.IntegerField()
    info = serializers.CharField()
    image = serializers.ImageField(required= False)

    class Meta:
        model = Crop
        fields = ["id","name" ,"type", "quantity", "price", "info", "image"]

class EquipmentSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    name = serializers.CharField(max_length = 100)
    type = serializers.ChoiceField(choices = equip_type)
    quantity = serializers.IntegerField()
    info = serializers.CharField()
    price = serializers.IntegerField()
    image = serializers.ImageField(required= False)

    class Meta:
        model = Equipment
        fields = ["id","name" ,"type", "quantity", "price","info", "image" ]
