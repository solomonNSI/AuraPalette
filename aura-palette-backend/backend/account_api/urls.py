from django.urls import path, include
from . import views

urlpatterns = [
    #path('history/<token>', views.history),
    path('addhistory/', views.create_history),
    path('checktoken/', views.check_token)
]