# 2.2.8 Agregamos una URL al frontend
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index)
]
