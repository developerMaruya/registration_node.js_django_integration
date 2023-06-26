from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import User

@csrf_exempt
def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = User(name=name, email=email, password=password)
        user.save()

        return JsonResponse({'message': 'Registration successful'})

    return JsonResponse({'message': 'Invalid request'})

def get_data(request):
    users = User.objects.all().values()
    return JsonResponse({'users': list(users)})
