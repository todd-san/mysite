from django.contrib import admin
from .models import Post, Banner

# Register your models here.


@admin.register(Post)
class Post(admin.ModelAdmin):
    list_display = ['id', 'title']


@admin.register(Banner)
class TreadImageAdmin(admin.ModelAdmin):
    list_display = ['name']
