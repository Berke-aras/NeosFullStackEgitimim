from django.shortcuts import render, redirect

from .models import *
from .form import *

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

def createOgrenci(request):
    form = OgrenciForm()
    context = {
        "form": form
    }
    if request.method == "POST":
        form = OgrenciForm(request.POST, request.FILES)
        if form.is_valid:
            form.save()
            return redirect("index")
    return render (request, "ogrenci-create.html", context)

