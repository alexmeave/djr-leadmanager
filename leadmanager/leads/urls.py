# 2.9 Crear urls.py de la app
from rest_framework import routers
from leads.api import LeadViewSet


router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')


urlpatterns = router.urls
