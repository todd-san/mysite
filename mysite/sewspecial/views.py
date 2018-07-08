from django.shortcuts import render

# Create your views here.


def index(request):
    """
    View function for the blog home page.
    """
    return render(request, 'sewspecial/app/index.html')
