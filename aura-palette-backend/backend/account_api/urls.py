from django.urls import path, include
from . import views

urlpatterns = [
    path('addhistory/', views.create_history),
    path('gethistory/', views.get_history),
    path('checktoken/', views.check_token)
]