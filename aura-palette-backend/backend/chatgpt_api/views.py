from django.http import JsonResponse
from .models import GPTPrompt
import openai
from rest_framework.decorators import api_view

import json
# Create your views here.

@api_view(["POST"])
def send_to_gpt(request, *args, **kwargs):
    data=request.data

    new_prompt = GPTPrompt()
    new_prompt.query = data.get('query')
    new_prompt.color1 = data.get('color1')
    new_prompt.color2 = data.get('color2')
    new_prompt.color3 = data.get('color3')
    new_prompt.color4 = data.get('color4')
    new_prompt.color5 = data.get('color5')

    openai.api_key = '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'

    prompt = f"Input: {data.get('query')} \nColor Codes: {data.get('color1')}, {data.get('color2')}, {data.get('color3')}, {data.get('color4')}, {data.get('color5')}\nWhy are these colors related to input?"
    print(prompt)
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=40
    )
    
    explanation = response.choices[0].text.strip()
    print(explanation)

    return JsonResponse({"code": 200, "explanation": explanation})
