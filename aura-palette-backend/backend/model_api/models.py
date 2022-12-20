from django.db import models

# Create your models here.
class Query(models.Model):
    query = models.TextField(max_length=120,blank=True,null=True)