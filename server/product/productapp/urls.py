from django.urls import path
from . import views


urlpatterns = [
    path("bird", views.BirdView.as_view()),
    path("bird/<str:pk>", views.SingleBirdView.as_view()),
    path("crop", views.CropView.as_view()),
    path("crop/<str:pk>", views.SingleCropView.as_view()),
    path("equip", views.EquipView.as_view()),
    path("equip/<str:pk>", views.SingleEquipView.as_view()),
]