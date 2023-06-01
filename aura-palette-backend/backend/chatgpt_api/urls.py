from django.urls import path
from . import views

urlpatterns = [
    path('sendgpt/', views.send_to_gpt),
]
