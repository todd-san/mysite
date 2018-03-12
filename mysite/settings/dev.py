from .base import *

DEBUG = True

# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_ROOT = 'media'
MEDIA_URL = 'media/'


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../../db.sqlite3'),
    }
}
