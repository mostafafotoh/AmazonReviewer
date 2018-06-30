import datetime

from django.db import models


# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=250)
    product_id = models.CharField(max_length=250)
    url = models.URLField()
    rate = models.FloatField()
    amazon_rate = models.FloatField()
    image_url = models.URLField(max_length=900,default=None)
    date = models.DateTimeField(default=datetime.datetime.now, blank=True)
