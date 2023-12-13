from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

# Create your views here.


monthly_challanges_dict = {
    "ocak": "Ocak Ayı Challange",
    "subat": "Subat Ayı Challange",
    "mart": "Mart Ayı Challange",
    "nisan": "Nisan Ayı Challange",
    "mayis": "Mayıs Ayı Challange",
    "haziran": "Haziran Ayı Challange",
    "temmuz": "Temmuz Ayı Challange",
    "agustos": "Ağustos Ayı Challange",
    "eylul": "Eylül Ayı Challange",
    "ekim": "Ekim Ayı Challange",
    "kasim": "Kasım Ayı Challange",
    "aralik": "Aralık Ayı Challange"
}


def index(request):
    return HttpResponse("<h1>Burası Ana Sayfa</h1>")

def monthly_challanges(request, month_name):
    try:
        challanges_text = monthly_challanges_dict[month_name]
    except:
        return HttpResponse("<h1>Aradığını Sayfa Bulunamadı</h1>")
    
    return HttpResponse(f"<h1>{challanges_text}</h1>")


def monthly_challanges_by_number(request, month_number):
    try:
        month = list(monthly_challanges_dict.keys())
        month_name = month[month_number - 1]
        #0 
    except:
        return HttpResponse("<h1>Aradığını Sayfa Bulunamadı Sayi</h1>")
    
    return HttpResponse(f"<h1>{month_name}</h1>")




# if month_name == "ocak":
#     response = "<h1>Ocak Ayı Görevi: bla bla</h1>"
# elif month_name == "subat":
#     response = "<h1>Şuabt Ayı Görevi: bla bla</h1>"
# elif month_name == "mart":
#     response = "<h1>Mart Ayı Görevi: bla bla</h1>"
# else:
#     return HttpResponseNotFound("Aradiginiz Sayfa Bulunamadı")
# return HttpResponse(response)




# def ocak(request):
#     return HttpResponse("<h1>Ocak Ayı Görevi: bla bla</h1>")

# def subat(request):
#     return HttpResponse("<h1>Şubat Ayı Görevi: bla bla</h1>")

# def mart(request):
#     return HttpResponse("<h1>Mart Ayı Görevi: bla bla</h1>")

# def nisan(request):
#     return HttpResponse("<h1>Nisan Ayı Görevi: bla bla</h1>")

# def mayis(request):
#     return HttpResponse("<h1>Mayıs Ayı Görevi: bla bla</h1>")

# def haziran(request):
#     return HttpResponse("<h1>Haziran Ayı Görevi: bla bla</h1>")

# def temmuz(request):
#     return HttpResponse("<h1>Temmuz Ayı Görevi: bla bla</h1>")

# def agustos(request):
#     return HttpResponse("<h1>Ağustos Ayı Görevi: bla bla</h1>")

# def eylul(request):
#     return HttpResponse("<h1>Eylül Ayı Görevi: bla bla</h1>")

# def ekim(request):
#     return HttpResponse("<h1>Ekim Ayı Görevi: bla bla</h1>")

# def kasim(request):
#     return HttpResponse("<h1>Kasım Ayı Görevi: bla bla</h1>")

# def aralik(request):
#     return HttpResponse("<h1>Aralık Ayı Görevi: bla bla</h1>")

