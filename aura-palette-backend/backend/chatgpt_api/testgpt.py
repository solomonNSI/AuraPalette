import openai

openai.api_key = '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'

prompt = f"Input: love \nColor Codes: #fff1ff , #e9c3cc , #fcd8ed, #f5d0e0, #f5d0e0\nWhy are these colors generated?"
print(prompt)
response = openai.Completion.create(
    engine='text-davinci-003',
    prompt=prompt,
    max_tokens=100
)

explanation = response.choices[0].text.strip()
print(explanation)

