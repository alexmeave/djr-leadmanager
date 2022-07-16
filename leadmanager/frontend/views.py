from django.shortcuts import render


# 2.2.7 Agregamos la vista de Django y la vinculamos con el template index.html
# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')
