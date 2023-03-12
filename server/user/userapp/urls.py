from django.urls import path
from . import views

urlpatterns = [
    path("", views.ping, name = "ping"),
    path("user", views.UserCreateView.as_view(), name="user"),

    # Product service
    path("bird", views.BirdView.as_view(), name="birds"),
    path("bird/<str:pk>", views.SingleBirdView.as_view(), name="single_bed"),
    path("crop", views.CropView.as_view(), name = "crops"),
    path("crop/<str:pk>", views.SingleCropView.as_view(), name="single_crop"),
    path("equip", views.EquipView.as_view(), name="equip"),
    path("equip/<str:pk>", views.SingleEquipView.as_view(), name = "single_equip"),
    # path("prices/<str:pk>", views.GetPrices.as_view(), name = "prices"),

    # Payment service
    path("payments", views.GetPaymentHistory.as_view(), name = "prices"),
    path("pay", views.MakePayment.as_view(), name = "prices"),
    path("verify/<str:pk>", views.VerifyPayment.as_view(), name = "prices"),


    # Notification service
    path("contact", views.ContactMessage.as_view(), name="single_crop"),
    path("sub", views.Subscibe.as_view(), name="equip"),
    path("unsub", views.UnSubscibe.as_view(), name = "single_equip"),
    path("news", views.Newsletter.as_view(), name = "prices"),
]
