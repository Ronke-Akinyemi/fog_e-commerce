from django.db import models
import uuid
# Create your models here.

option = (
        ("layers POL", "layers POL"),
        ("layers POC","layers POC"),
        ("layers DOC","layers DOC"),
        ("layers Spent","layers Spent"),
        ("Broiler DOC","Broiler DOC"),
        ("Broiler 8 weeks","Broiler 8 weeks"),
        ("Turkey DOC","Turkey DOC"),
        ("layers Table size","layers Table size"),
        ("Broiler Table Size","Broiler Table Size")
    )
crop_type = (
    ("maize", "maize"),
    ("cassava", "cassava"),
    ("yam", "yam"),
    ("rice", "rice")
)
equip_type = (
    ("crop", "crop"),
    ("animal", "animal")
)
class Bird(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length = 50, default = 'Imported Turkey')
    type = models.CharField(max_length = 50, choices = option, default = 'layers POL')
    quantity = models.IntegerField()
    price = models.IntegerField()
    age = models.CharField(max_length = 50)
    weight = models.CharField(max_length = 50)
    source = models.CharField(max_length = 250)
    info = models.TextField()
    image = models.ImageField(upload_to ='birds/', default="default_bird.png")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}: {self.id}"


class Crop(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length = 50, choices = crop_type, default = 'maize')
    name = models.CharField(max_length = 50, default = 'Imported maize')
    quantity = models.IntegerField()
    price = models.IntegerField()
    info = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to ='crops/', default="default_crop.png")
    def __str__(self):
        return f"{self.name}: {self.id}"

class Equipment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length = 50, default = 'Animal feeder')
    type = models.CharField(max_length = 50, choices = equip_type, default = 'animal')
    quantity = models.IntegerField()
    price = models.IntegerField()
    info = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to ='equipments/', default="default_equip.png")
    def __str__(self):
        return f"{self.name}: {self.id}"