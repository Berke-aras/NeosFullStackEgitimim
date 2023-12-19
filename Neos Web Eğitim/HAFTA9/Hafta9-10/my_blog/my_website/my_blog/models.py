from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=80)
    context = models.CharField(max_length=200)
    image = models.CharField(max_length=80)
    slug = models.SlugField()