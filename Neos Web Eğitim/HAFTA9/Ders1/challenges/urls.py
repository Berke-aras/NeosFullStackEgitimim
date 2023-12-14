from django.urls import path
from . import views


# boş bırakmak ana sayfa ( http://127.0.0.1:8000/ mesela bunu kendisi)

urlpatterns = [
    path('', views.index),
    path('<int:month_number>', views.monthly_challanges_by_number),
    path('<str:month_name>', views.monthly_challanges),
    
    
]




    # path('ocak', views.ocak),
    # path('subat' ,views.subat),
    # path('mart', views.mart),
    # path('nisan', views.nisan),
    # path('mayis', views.mayis),
    # path('haziran', views.haziran),
    # path('temmuz', views.temmuz),
    # path('ogustos', views.agustos),
    # path('eylul', views.eylul),
    # path('ekim', views.ekim),
    # path('kasim', views.kasim),
    # path('aralik', views.aralik),