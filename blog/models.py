from django.db import models
from mysite.settings import *


class Post (models.Model):
    CATEGORIES = (
        ('python', 'python'),
        ('web development', 'web development'),
        ('angularJS', 'angularJS'),
        ('angular', 'angular'),
        ('engineering', 'engineering'),
        ('FEA', 'FEA'),
        ('vibrations', 'vibrations'),
        ('abaqus', 'abaqus'),
        ('nastran', 'nastran'),
        ('matlab', 'matlab'),
    )

    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, default=None)
    abstract = models.TextField(max_length=500, default=None)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    body = models.TextField()

    category = models.CharField(max_length=50, choices=CATEGORIES, default='python')
    tags = models.CharField(max_length=1000, default=None, blank=True)

    def __str__(self):
        return self.title
