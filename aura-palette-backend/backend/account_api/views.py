from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from requests import exceptions
from .models import Palette
from backend_main_api.database import DatabaseAPI
from django.core import serializers
import json
from django.http import JsonResponse

@api_view(["POST"])
def create_history(request, *args, **kwargs):
    data=request.data
    token = request.headers.get('Authorization')
    token = token.partition(' ')[2]
    token = token[1:-1]
    try:
        info = DatabaseAPI.auth.get_account_info(token)
    except Exception as e:
        err_code = json.loads(e.args[1])['error']['code']
        err_msg = json.loads(e.args[1])['error']['message']
        return JsonResponse({"code": err_code, "err_msg":err_msg})
    else:
        uid = info['users'][0]['localId']

        new_palette = Palette()
        new_palette.query = data.get('query')
        new_palette.color1 = data.get('color1')
        new_palette.color2 = data.get('color2')
        new_palette.color3 = data.get('color3')
        new_palette.color4 = data.get('color4')
        new_palette.color5 = data.get('color5')

        json_palette = json.loads(serializers.serialize('json', [ new_palette, ]))
        json_palette = json_palette[0]
        json_palette_info = json_palette['fields']
        DatabaseAPI.db.child("users").child(uid).child("history").push(json_palette_info, token)
        return Response({})

@api_view(["POST"])
def create_favorite(request, *args, **kwargs):
    data=request.data
    token = request.headers.get('Authorization')
    token = token.partition(' ')[2]
    token = token[1:-1]
    try:
        info = DatabaseAPI.auth.get_account_info(token)
    except Exception as e:
        err_code = json.loads(e.args[1])['error']['code']
        err_msg = json.loads(e.args[1])['error']['message']
        return JsonResponse({"code": err_code, "err_msg":err_msg})
    else:
        uid = info['users'][0]['localId']

        new_palette = Palette()
        new_palette.query = data.get('query')
        new_palette.color1 = data.get('color1')
        new_palette.color2 = data.get('color2')
        new_palette.color3 = data.get('color3')
        new_palette.color4 = data.get('color4')
        new_palette.color5 = data.get('color5')

        json_palette = json.loads(serializers.serialize('json', [ new_palette, ]))
        json_palette = json_palette[0]
        json_palette_info = json_palette['fields']
        DatabaseAPI.db.child("users").child(uid).child("favorites").push(json_palette_info, token)
        return Response({})
    
@api_view(["GET"])
def check_token(request, *args, **kwargs):
    token = request.headers.get('Authorization')
    token = token.partition(' ')[2]
    token = token[1:-1]

    try:
        info = DatabaseAPI.auth.get_account_info(token)
    except:
        return JsonResponse({"user_token": "invalid token"})

    uid = info['users'][0]['localId']

    if(uid != None):
        return JsonResponse({"user_token": token})
    

@api_view(["GET"])
def get_history(request, *args, **kwargs):
    data=request.data
    token = request.headers.get('Authorization')
    token = token.partition(' ')[2]
    token = token[1:-1]

    try:
        info = DatabaseAPI.auth.get_account_info(token)
    except Exception as e:
        err_code = json.loads(e.args[1])['error']['code']
        err_msg = json.loads(e.args[1])['error']['message']
        return JsonResponse({"code": err_code, "err_msg":err_msg})
    else:
        uid = info['users'][0]['localId']
        palettes = DatabaseAPI.db.child("users").child(uid).child("history").get(token)
        palettes_arr = []
        for palette in palettes.each():
            palettes_arr.append(palette.val())
        palettes_json = json.dumps(palettes_arr)
        palettes_str = '{ "history" : ' + palettes_json + '}'

        palettes_fin = json.loads(palettes_str)

        return JsonResponse(palettes_fin)
    
@api_view(["GET"])
def get_favorites(request, *args, **kwargs):
    data=request.data
    token = request.headers.get('Authorization')
    token = token.partition(' ')[2]
    token = token[1:-1]

    try:
        info = DatabaseAPI.auth.get_account_info(token)
    except Exception as e:
        err_code = json.loads(e.args[1])['error']['code']
        err_msg = json.loads(e.args[1])['error']['message']
        return JsonResponse({"code": err_code, "err_msg":err_msg})
    else:
        uid = info['users'][0]['localId']
        palettes = DatabaseAPI.db.child("users").child(uid).child("favorites").get(token)
        palettes_arr = []
        for palette in palettes.each():
            palettes_arr.append(palette.val())
        palettes_json = json.dumps(palettes_arr)
        palettes_str = '{ "favorites" : ' + palettes_json + '}'

        palettes_fin = json.loads(palettes_str)

        return JsonResponse(palettes_fin)

