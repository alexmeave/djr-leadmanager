from django.db import models
from django.contrib.auth.models import User


# 2.4 Crear el modelo Lead para la app leads
class Lead(models.Model):
    nombre = models.CharField(max_length=100)
    primer_apellido = models.CharField(max_length=100)
    segundo_apellido = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    observacion = models.CharField(max_length=500, blank=True)
    propietario = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    fecha_alta = models.DateTimeField(auto_now_add=True)
