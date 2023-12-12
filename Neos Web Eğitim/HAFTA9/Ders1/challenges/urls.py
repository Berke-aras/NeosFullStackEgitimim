from django.urls import path
from . import views


# boş bırakmak ana sayfa ( http://127.0.0.1:8000/ mesela bunu kendisi)

urlpatterns = [
    path('', views.index),
    path('ocak', views.ocak),
    path('subat' ,views.subat),
]
