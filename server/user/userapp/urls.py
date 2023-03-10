from django.urls import path
from . import views

urlpatterns = [
    path("", views.ping, name = "ping"),
    path("user", views.UserCreateView.as_view(), name="user")
]