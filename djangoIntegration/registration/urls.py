from django.urls import path
from .views import register, get_data

urlpatterns = [
    path('', register, name='register'),
    path('getdata', get_data, name='get_data'),
]
