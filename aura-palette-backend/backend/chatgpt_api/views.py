from django.http import JsonResponse
import openai
from rest_framework.decorators import api_view

import json
# Create your views here.

@api_view(["POST"])
def send_to_gpt(request, *args, **kwargs):
    data=request.data

    openai.api_key = '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'

    prompt = f"Input: {data.get('query')} \nColor Codes: {data.get('color1')}, {data.get('color2')}, {data.get('color3')}, {data.get('color4')}, {data.get('color5')}\nWhy are these colors generated?"

    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=100
    )
    explanation = response.choices[0].text.strip()

    return JsonResponse({"code": 200, "response": explanation})
