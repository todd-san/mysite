from django.shortcuts import render
from .serializers import UserSerializer, PostSerializer
from .models import Post
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
# Create your views here.


# ViewSets define the view behavior.
class UserApiViewSet(viewsets.ModelViewSet):
    """
    API ViewSet for Users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


# ViewSets define the view behavior.
class PostApiViewSet(viewsets.ModelViewSet):
    """
    API ViewSet for Blog Posts.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def filter_queryset(self, queryset):
        queryset = super(PostApiViewSet, self).filter_queryset(queryset)
        return queryset.order_by('-date_modified')


def index(request):
    """
    View function for the blog home page.
    """
    return render(request, 'blog/index.html')
