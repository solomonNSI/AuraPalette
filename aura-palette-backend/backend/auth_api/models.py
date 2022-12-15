from django.db import models

class User(models.Model):
    uid = models.CharField(max_length=120,blank=True,null=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    favPaletteIDs = models.JSONField(blank=True,null=True)
    histPaletteIDs = models.JSONField(blank=True,null=True)