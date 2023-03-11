from django.urls import path
from . import views


urlpatterns = [
    path("", views.ping, name = "ping"),
    path("bird", views.BirdView.as_view(), name="birds"),
    path("bird/<str:pk>", views.SingleBirdView.as_view(), name="single_bed"),
    path("crop", views.CropView.as_view(), name = "crops"),
    path("crop/<str:pk>", views.SingleCropView.as_view(), name="single_crop"),
    path("equip", views.EquipView.as_view(), name="equip"),
    path("equip/<str:pk>", views.SingleEquipView.as_view(), name = "single_equip"),
    path("prices/<str:pk>", views.GetPrices.as_view(), name = "prices")
]