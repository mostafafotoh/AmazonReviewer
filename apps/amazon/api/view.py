from rest_framework.viewsets import ModelViewSet

from .serializer import ProductSetSerializer
from ..models import Product


class DataView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSetSerializer
