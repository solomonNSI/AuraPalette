from django.db import models

class GPTPrompt(models.Model):
    query = models.CharField(max_length=240)
    color1 = models.CharField(max_length=100)
    color2 = models.CharField(max_length=100)
    color3 = models.CharField(max_length=100)
    color4 = models.CharField(max_length=100)
    color5 = models.CharField(max_length=100)