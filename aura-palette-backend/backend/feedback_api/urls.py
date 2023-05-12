from django.urls import path
from . import views

urlpatterns = [
    path('sendfeedback/', views.give_feedback),
]
