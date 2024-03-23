from django.shortcuts import render
from django.http import JsonResponse,HttpResponse


# Create your views here.
def get_tourist_attractions(request):
    return HttpResponse(request.GET.get("countries"))
