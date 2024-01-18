from django.shortcuts import render

from .form import *

# Create your views here.
def register(request):
    form=Kullanicilar()
    
    context={
        "form":form
    }
    
    return render(request, "register.html", context)

