from django.urls import path
from sendEmail.views import send_email

urlpatterns = [
    path("", send_email)
]
