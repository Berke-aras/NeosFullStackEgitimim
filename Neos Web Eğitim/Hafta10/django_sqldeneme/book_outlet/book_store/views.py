from django.shortcuts import render, get_object_or_404
from .models import Book
from django.http import Http404 


# Create your views here.

def index_page(request):
    return render( request, "index.html")


def show_books(request):
    books = Book.objects.all()
    context = {
        "books" : books
    }
    return render( request, "all-books.html", context)


def book_detail(request, id):
    
    # try:
    #     book = Book.objects.get(pk=id)
    # except:
    #     raise Http404() 
    
    book = get_object_or_404(Book, pk=id) #pk = primary key
    
    return render( request, "bookdetail.html", {
            "title":book.title,
            "author": book.author,
            "rating": book.rating,
            "bests_seller": book.is_bestseller,
        })