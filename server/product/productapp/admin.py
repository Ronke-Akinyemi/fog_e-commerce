from django.contrib import admin
from .models import Bird, Crop, Equipment
# Register your models here.
admin.site.register(Bird)
admin.site.register(Crop)
admin.site.register(Equipment)