from django.test import TestCase, Client
from django.urls import reverse
from productapp.models import Bird, Crop, Equipment
import json


class TestViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.all_url = reverse("all")
        self.bird_url = reverse("birds")

    def test_all_view_GET(self):
        response = self.client.get(self.all_url)
        self.assertEquals(response.status_code, 200)

    def test_bird_view_GET(self):
        response = self.client.get(self.bird_url)
        self.assertEquals(response.status_code, 200)