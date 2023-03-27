from django.urls import path
from . import views

urlpatterns = [
    path("", views.ping, name = "ping"),
    # Product service
    path("all", views.AllProductView.as_view(), name="all_product"),
    path("bird", views.BirdView.as_view(), name="birds"),
    path("bird/<str:pk>", views.SingleBirdView.as_view(), name="single_bird"),
    path("crop", views.CropView.as_view(), name = "crops"),
    path("crop/<str:pk>", views.SingleCropView.as_view(), name="single_crop"),
    path("equip", views.EquipView.as_view(), name="equip"),
    path("equip/<str:pk>", views.SingleEquipView.as_view(), name = "single_equip"),
    # path("prices/<str:pk>", views.GetPrices.as_view(), name = "prices"),

    # Payment service
    path("pay", views.MakePayment.as_view(), name = "pay"),
    path("verify/<str:pk>", views.VerifyPayment.as_view(), name = "verify"),


    # Notification service
    path("contact", views.ContactMessage.as_view(), name="contact"),
    path("sub", views.Subscibe.as_view(), name="sub"),
    path("unsub", views.UnSubscibe.as_view(), name = "unsub"),
]
