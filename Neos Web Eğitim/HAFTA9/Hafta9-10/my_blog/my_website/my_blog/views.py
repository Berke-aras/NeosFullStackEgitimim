from django.shortcuts import render

# Create your views here.

def index_page(request):
    return render( request, "index.html")

def all_posts(request):
    return render( request, "all-posts.html")

def post_detail(request, id):
    return render( request, "post-detail.html", {
                "id_no": id
                })