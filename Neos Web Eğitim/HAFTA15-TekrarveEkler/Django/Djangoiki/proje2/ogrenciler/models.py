from django.db import models

# Create your models here.

class Ogrenciler(models.Model):
    adSoyad= models.CharField(max_length=100, verbose_name="Ad Soyad")
    hakkinda= models.TextField(max_length=300)
    resim=models.FileField(upload_to="profilResim")
    
    def __str__(self) -> str:
        return self.adSoyad