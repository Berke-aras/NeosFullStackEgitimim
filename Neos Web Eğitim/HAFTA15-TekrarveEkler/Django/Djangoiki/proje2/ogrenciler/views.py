from django.shortcuts import render

from .models import *

# Create your views here.

def index(request):
    ogrenciler= Ogrenciler.objects.all()
    context={
        "ogrenciler": ogrenciler
    }
    
    return render(request, "index.html", context)

def detay(request,id):
    ogrenci= Ogrenciler.objects.filter(id=id)
    context={
        "ogrenci": ogrenci
    }
    
    return render(request, "detay.html", context)

