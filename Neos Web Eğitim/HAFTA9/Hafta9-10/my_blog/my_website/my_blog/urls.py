from django.urls import path
from .views import *

urlpatterns = [
    path("", index_page, name="indexPage"),
    path("posts", all_posts, name="allPosts" ),
    path("posts/<id>", post_detail, name="postDetail")
]