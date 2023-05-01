from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from backend_main_api.database import DatabaseAPI
from .models import PaletteFeedback
from django.core import serializers
import json


@api_view(["POST"])
def give_feedback(request, *args, **kwargs):
    data=request.data

    new_feedback = PaletteFeedback()
    new_feedback.query = data.get('color1')
    new_feedback.color1 = data.get('color1')
    new_feedback.color2 = data.get('color2')
    new_feedback.color3 = data.get('color3')
    new_feedback.color4 = data.get('color4')
    new_feedback.color5 = data.get('color5')
    new_feedback.rate = data.get('rate')
    new_feedback.comment = data.get('comment')

    json_feedback = json.loads(serializers.serialize('json', [ new_feedback, ]))
    json_feedback = json_feedback[0]
    json_feedback_info = json_feedback['fields']

    DatabaseAPI.db.child("palette_feedbacks").set(json_feedback_info)

    return Response({'message': 'Palette feedback saved to Firebase'})



