from django.db import models
from mysite.settings import *
# Create your models here.


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
    subtitle = models.CharField(max_length=500, default=None)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    body = models.TextField()

    category = models.CharField(max_length=50, choices=CATEGORIES, default='python')

    def __str__(self):
        return self.title


class Banner(models.Model):

    BANNER_FOLDER = 'blog_banners'

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default=None)
    post = models.ForeignKey(Post, to_field='id')
    image = models.ImageField('image', upload_to=os.path.join(MEDIA_ROOT, BANNER_FOLDER))

    @property
    def path(self):
        return str(self.image)

    def url(self):
        return os.path.join(MEDIA_URL, self.BANNER_FOLDER, self.name)

    def __str__(self):
        return self.name
