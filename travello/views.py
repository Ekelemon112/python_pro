from django.shortcuts import render
from .models import Destination
from django.contrib.auth.models import User 

# Create your views here.

def index(request):
    
    dests = Destination.objects.all()

    return render(request, "index.html", {'dests': dests})

def dashboard(request):
    return render(request, 'dashboard.html')

def about(request):
    return render(request, 'about.html')

def elements(request):
    return render(request, 'elements.html')

def news(request):
    return render(request, 'news.html')

def destinations(request):
    return render(request, 'destinations.html')

def contact(request):
    return render(request, 'contact.html')

def policy(request):
    return render(request, 'policy.html')

def help(request):
    return render(request, 'help.html')

def booking(request):
    return render(request, 'booking.html')

def search(request):
    query = request.GET.get('search', '')
    user = None

    if query:
        try:
            user = User.objects.get(username__iexact=query)
        except User.DoesNotExist:
            user = None

    context = {
        'query': query,
        'user': user,
    }
    return render(request, 'search.html', context)


    # def search(request):
    #     query = request.GET.get('search')  # Get the search term from the URL
    #     results = []

    # NAMES = ["John", "Jane", "Michael", "Sarah", "David", "Monica"]
    # if query:
    #     results = [name for name in NAMES if query.lower() in name.lower()]

    # return render(request, 'index.html', {'results': results})

def search(request):
    return render(request, 'search.html')
    # your logic here

    # return render(request, 'search.html')

def profile(request):
    pass
    
    