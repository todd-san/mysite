from django.contrib.auth.models import User
from .models import Post, AboutMe, Service, Contact, Project
from rest_framework import routers, serializers, viewsets


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


# Serializers define the API representation.
class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = (
            'id',
            'url', 
            'title',
            'abstract',
            'date_created',
            'date_modified',
            'body',
            'category',
            'tags',
        )


# Serializers define the API representation.
class AboutMeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AboutMe
        fields = (
            'id',
            'url',
            'title',
            'date_created',
            'date_modified',
            'body',
        )


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Service
        fields = (
            'id',
            'url',
            'title',
            'description',
        )


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = (
            'id',
            'url',
            'address',
            'phone_number',
            'email',

            'twitter',
            'linkedin',
            'github',
            'bitbucket',
        )


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id',
            'url',
            'name',
            'description',
            'link',
            'image',
            'date_created',
            'date_modified',
        )
