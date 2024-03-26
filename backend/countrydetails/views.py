from django.http import JsonResponse
from countrydetails.models import CountryDetail


# Create your views here.
def get_tourist_attractions(request):
    countries = request.GET.get("countries", ["United Kingdom"])
    print(countries)
    tourist_attractions = CountryDetail.objects.all().values()
    requested_tourist_attractions = get_requested_tourist_attractions(tourist_attractions=tourist_attractions,
                                                                      countries=countries)
    return JsonResponse(dict(tourist_attractions=requested_tourist_attractions))


def get_requested_tourist_attractions(tourist_attractions: list, countries: list) -> list:
    requested_tourist_attractions = []
    for tourist_attraction in tourist_attractions:
        if tourist_attraction.get("country", '') in countries:
            requested_tourist_attractions.append(tourist_attraction)

    return requested_tourist_attractions
