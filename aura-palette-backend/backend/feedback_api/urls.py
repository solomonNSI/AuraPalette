from django.urls import path
from . import views

urlpatterns = [
    path('/sendfeedback/', views.FeedbackAPIView.as_view(), name='feedback_api'),
]
