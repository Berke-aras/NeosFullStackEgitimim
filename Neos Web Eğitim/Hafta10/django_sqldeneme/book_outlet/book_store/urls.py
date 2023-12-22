from django.urls import path
from. views import *

urlpatterns = [
    path("", index_page, name="indexPage"),
    path("books", show_books, name="showBooks"),
    path("books/<slug:slug>", book_detail, name="bookDetail")
]