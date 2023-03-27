from django.test import SimpleTestCase
from django.urls import reverse, resolve
from productapp import views


class TestUrls(SimpleTestCase):

    def test_all_url(self):
        url = reverse("all")
        self.assertEquals(resolve(url).func.view_class, views.AllProductView)
    def test_user_url(self):
        url = reverse("user")
        self.assertEquals(resolve(url).func.view_class, views.UserCreateView)
    def test_all_sub_url(self):
        url = reverse("all_sub")
        self.assertEquals(resolve(url).func.view_class, views.AllSubcribers)

    def test_birds_url(self):
        url = reverse("birds")
        self.assertEquals(resolve(url).func.view_class, views.BirdView)

    def test_single_bird_url(self):
        url = reverse("single_bird", kwargs={'pk': 1})
        self.assertEquals(resolve(url).func.view_class, views.SingleBirdView)

    def test_crops_url(self):
        url = reverse("crops")
        self.assertEquals(resolve(url).func.view_class, views.CropView)

    def test_single_crop_url(self):
        url = reverse("single_crop", kwargs={'pk': 1})
        self.assertEquals(resolve(url).func.view_class, views.SingleCropView)

    def test_equip_url(self):
        url = reverse("equip")
        self.assertEquals(resolve(url).func.view_class, views.EquipView)

    def test_single_equip_url(self):
        url = reverse("single_equip", kwargs={'pk': 1})
        self.assertEquals(resolve(url).func.view_class, views.SingleEquipView)

    # def test_pay_url(self):
    #     url = reverse("pay")
    #     self.assertEquals(resolve(url).func.view_class, views.MakePayment)

    # def test_verify_url(self):
    #     url = reverse("verify", kwargs={'pk': 1})
    #     self.assertEquals(resolve(url).func.view_class, views.VerifyPayment)
    def test_prices_url(self):
        url = reverse("prices", kwargs={'pk': 1})
        self.assertEquals(resolve(url).func.view_class, views.GetPrices)


    def test_payments_url(self):
        url = reverse("payments")
        self.assertEquals(resolve(url).func.view_class, views.GetPaymentHistory)

