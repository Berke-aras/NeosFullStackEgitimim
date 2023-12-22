from django.db import models

from django.core.validators import MinValueValidator, MaxValueValidator

from django.urls import reverse

from django.utils.text import slugify

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=80)
    rating = models.IntegerField(
        validators = [MinValueValidator(1), MaxValueValidator(5)]
    )
    author = models.CharField(max_length=50, null= True)
    is_bestseller = models.BooleanField(default = False)
    
    slug = models.SlugField(default="", null=False)
    
    def __str__(self) :
        return f'{self.title}, ({self.rating})'
    
    def get_absolute_url(self):
        return reverse("bookDetail", args=[self.id])
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super.save(*args, **kwargs)




"""
lt = lowerthan
gt = greater than
lte = küçük eşit
gte = büyük eşit
__startwith = şununla başlıyor mu
__endswith = şununla bitiyor mu
__exact = kesinlikle bu mu
__contains = şu değerleri içeriyor mu

"""