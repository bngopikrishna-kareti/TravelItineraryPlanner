from django.urls import path
from countrydetails.views import get_tourist_attractions

urlpatterns = [
    path("", get_tourist_attractions)
]
