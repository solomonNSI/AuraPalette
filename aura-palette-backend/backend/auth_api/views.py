from rest_framework.decorators import api_view
from backend_main_api.database import DatabaseAPI
from .models import User
from django.core import serializers
import json
from django.http import JsonResponse

@api_view(["POST"])
def register(request, *args, **kwargs):
    data=request.data
    user = DatabaseAPI.auth.create_user_with_email_and_password(data.get('email'), data.get('password'))

    # get uid from creation and save to database
    info = DatabaseAPI.auth.get_account_info(user['idToken'])
    uid = info['users'][0]['localId']

    # save the model
    new_user = User()
    new_user.uid = uid
    new_user.name = data.get('name')
    new_user.email = data.get('email')

    # DUE TO FIREBASE THESE WILL NOT BE ADDED TO DATABASE AS THEY ARE EMPTY
    new_user.favPaletteIDs = []
    new_user.histPaletteIDs = []

    json_user = json.loads(serializers.serialize('json', [ new_user, ]))
    json_user = json_user[0]
    json_user_info = json_user['fields']
    
    # TODO: ADD EXCEPTIONS
    DatabaseAPI.db.child("users").child(uid).set(json_user_info,user['idToken'])
    user_token = user['idToken']
    return JsonResponse({"user_token": user_token})

# TODO: Add exceptions
@api_view(["POST"])
def signin(request, *args, **kwargs):
    data=request.data
    user= DatabaseAPI.auth.sign_in_with_email_and_password(data.get('email'), data.get('password'))
    user_token = user['idToken']

    return JsonResponse({"user_token": user_token})

@api_view(["POST"])
def signout(request, *args, **kwargs):
    print(DatabaseAPI.auth.current_user)
    DatabaseAPI.auth.current_user = None
    print(DatabaseAPI.auth.current_user)
    return JsonResponse({"user_token": None})