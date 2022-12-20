from django.urls import path
from . import views

urlpatterns = [
    path('getpalette/', views.get_palette),
]
