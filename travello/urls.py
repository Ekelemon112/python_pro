from django.urls import path
from . import views


urlpatterns = [ 
    path('', views.index, name='index'),
    path('dashboard.html', views.dashboard, name='dashboard'),
    path('about.html', views.about, name='about'),
    path('elements.html', views.elements, name='elements'),
    path('news.html', views.news, name='news'),
    path('destinations.html', views.index, name='destinations'),
    path('contact.html', views.contact, name='contact'),
    path('policy.html', views.policy, name='policy'),
    path('help.html', views.help, name='help'),
    path('search/', views.search, name='search'),
    path('booking.html', views.booking, name='booking'),
]