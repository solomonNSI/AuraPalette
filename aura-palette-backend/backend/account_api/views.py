from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Palette
from backend_main_api.database import DatabaseAPI
from django.core import serializers
import json

@api_view(["POST"])
def create_history(request, token, *args, **kwargs):
    data=request.data

    new_palette = Palette()
    new_palette.color1 = data.get('color1')
    new_palette.color2 = data.get('color2')
    new_palette.color3 = data.get('color3')
    new_palette.color4 = data.get('color4')
    new_palette.color5 = data.get('color5')

    json_palette = json.loads(serializers.serialize('json', [ new_user, ]))
    json_palette = json_palette[0]
    json_palette_info = json_palette['fields']

    # TODO: GET USER ID FROM AUTH TOKEN + ADD AN ARRAY FIELD FOR HISTORY
    #DatabaseAPI.db.child("users").child(uid).set(json_user_info,user['idToken'])

    return Response({"auth": auth})
