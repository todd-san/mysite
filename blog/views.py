from django.shortcuts import render
from mysite.settings.dev import *
from .models import Post, Banner

# Create your views here.


def index(request):
    """
    View function for the kass home page.
    """

    # data = {'host_url': request.META['HTTP_HOST']}

    print('\n\n')
    print('BASE_DIR', BASE_DIR)
    print('MEDIA REPOSITORY', MEDIA_REPOSITORY)
    print('MEDIA URL', MEDIA_URL)
    print('MEDIA_ROOT', MEDIA_ROOT)

    print('STATIC URL', STATIC_URL)
    print('STATICFILES_DIRS', STATICFILES_DIRS)
    print('\n\n')

    data = {
        'posts': Post.objects.all(),
        'banners': Banner.objects.all()
    }

    return render(request, 'blog/index.html', context=data)
