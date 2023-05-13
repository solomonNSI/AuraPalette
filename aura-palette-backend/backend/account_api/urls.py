from django.urls import path, include
from . import views

urlpatterns = [
    path('addhistory/', views.create_history),
    path('addfavorite/', views.create_favorite),
    path('gethistory/', views.get_history),
    path('getfavorites/', views.get_favorites),
    path('checktoken/', views.check_token)
]