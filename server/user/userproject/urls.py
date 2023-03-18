
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="FOG Admin API microservice documentation",
      default_version='v1',
      description="This documentation shows all the endpoints available for Admin users only users",
      terms_of_service="https://www.fog-agric.com",
      contact=openapi.Contact(email="akinolasamson1234@gmail.com"),
      license=openapi.License(name="FOG agric"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("userapp.urls")),
    path('docs', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
