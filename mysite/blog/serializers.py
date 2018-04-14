from django.contrib.auth.models import User
from .models import Post
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
            'title',
            'abstract',
            'date_created',
            'date_modified',
            # 'body',
            'category',
            'tags',
        )
