from django.http import JsonResponse
from countries.models import Continent


# Create your views here.

def get_countries(request, continent):
    continents = Continent.objects.all().values()
    countries = []
    for entry in continents:
        if entry.get('continent', '').capitalize() == continent.capitalize():
            countries = entry.get('countries', []).split(',')
            break
    return JsonResponse(dict(countries=countries, selected_continent=continent.capitalize()))
