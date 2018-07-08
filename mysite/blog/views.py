from django.shortcuts import render
from .serializers import UserSerializer, PostSerializer, AboutMeSerializer, ContactSerializer, ServiceSerializer, \
    ProjectSerializer
from .models import Post, AboutMe, Contact, Service, Project
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


# ViewSets define the view behavior.
class UserApiViewSet(viewsets.ModelViewSet):
    """
    API ViewSet for Users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostApiViewSet(viewsets.ModelViewSet):
    """
    API ViewSet for Blog Posts.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def filter_queryset(self, queryset):
        queryset = super(PostApiViewSet, self).filter_queryset(queryset)
        return queryset.order_by('-date_modified')


class AboutMeApiViewSet(viewsets.ModelViewSet):
    """
    API ViewSet for Blog Posts.
    """
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer


class ServiceApiViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class ContactApiViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ProjectApiViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


def index(request):
    """
    View function for the blog home page.
    """
    return render(request, 'blog/app/index.html')
