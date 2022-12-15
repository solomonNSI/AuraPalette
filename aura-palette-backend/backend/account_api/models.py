from django.db import models

class Palette(models.Model):
    color1 = models.CharField(max_length=6)
    color2 = models.CharField(max_length=6)
    color3 = models.CharField(max_length=6)
    color4 = models.CharField(max_length=6)
    color5 = models.CharField(max_length=6)