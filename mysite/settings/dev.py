from .base import *

DEBUG = True

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# MEDIA_ROOT = 'media'
MEDIA_URL = 'media/'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../../db.sqlite3'),
    }
}
