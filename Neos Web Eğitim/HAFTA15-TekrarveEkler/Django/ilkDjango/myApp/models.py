from django.db import models

# Create your models here.

class Urunler(models.Model):
    isim = models.CharField(max_length=100, verbose_name="Urun İsmi")
    aciklama=models.TextField(max_length=500)
    fiyat=models.IntegerField(default=0)
    resim=models.FileField(upload_to="urunResimleri", null=True, blank=True) #klasör adı
    
    def __str__(self):
        return self.isim
    