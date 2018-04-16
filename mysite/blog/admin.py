from django.contrib import admin
from .models import Post, AboutMe

# Register your models here.


@admin.register(Post)
class Post(admin.ModelAdmin):
    list_display = ['id', 'title']


@admin.register(AboutMe)
class AboutMe(admin.ModelAdmin):
    list_display = ['id', 'title']

