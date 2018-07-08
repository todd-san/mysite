from django.db import models


from django.utils.dateformat import format as time_fmt


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

    @property
    def epoch_modified(self):
        return time_fmt(self.date_modified, 'U')

    def __str__(self):
        return self.title


class AboutMe(models.Model):
    title = 'About Me'
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    body = models.TextField(default='', blank=True, null=True)

    class Meta:
        verbose_name = 'About Me'
        verbose_name_plural = 'About Me'

    @property
    def epoch_modified(self):
        return time_fmt(self.date_modified, 'U')

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()


class Contact(models.Model):
    address = models.TextField()
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()

    twitter = models.CharField(max_length=100)
    linkedin = models.CharField(max_length=100)
    github = models.CharField(max_length=100)
    bitbucket = models.CharField(max_length=100)


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    image = models.ImageField(null=True, blank=True, default=None)
    link = models.TextField(null=True, blank=True, default='')

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    @property
    def image_link(self):
        return self.image.url
