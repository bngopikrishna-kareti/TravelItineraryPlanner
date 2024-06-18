from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json
from backend.settings import (EMAIL_ADDRESS, EMAIL_HOST, EMAIL_PORT,
                              EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
import smtplib
from email.message import EmailMessage


# Create your views here.
@csrf_exempt
def send_email(request):
    data = json.loads(request.body)
    email_body = f"""
    {data.get('message')}
    
    you can reply to this email {data.get('email')}
    """
    message = get_email_message(data)
    message.set_content(email_body)

    server = smtplib.SMTP(host=EMAIL_HOST, port=EMAIL_PORT)
    server.starttls()
    server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
    server.send_message(message)
    return HttpResponse("email sent")


def get_email_message(data):
    message = EmailMessage()
    message['Subject'] = f"general query from {data.get('name')}"
    message['From'] = EMAIL_HOST_USER
    message['To'] = [EMAIL_ADDRESS]

    return message
