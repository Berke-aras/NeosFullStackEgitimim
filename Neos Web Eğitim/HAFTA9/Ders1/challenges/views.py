from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("<h1>Burası Ana Sayfa</h1>")

def ocak(request):
    return HttpResponse("<h1>Ocak Ayı Görevi: bla</h1>")

def subat(request):
    return HttpResponse("<h1>Şubat Ayı Görevi: bla bla</h1>")