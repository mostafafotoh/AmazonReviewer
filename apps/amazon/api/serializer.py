from rest_framework import serializers

from scrapper.amazon_scrapper import scrap_analyze
from ..models import Product


class ProductSetSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField(max_length=250)
    product_id = serializers.CharField(max_length=250)
    url = serializers.URLField()
    rate = serializers.FloatField()
    amazon_rate = serializers.FloatField()
    image_url = serializers.URLField(required=False,default=None)
    date = serializers.DateTimeField(required=False)

    class Meta:
        model = Product
        fields = ('name', 'product_id', 'url', 'rate', 'amazon_rate', 'image_url', 'date')

    def create(self, validated_data):
        rate, url_id, name, url, product_rate, image_url = scrap_analyze(url=validated_data['url'])
        validated_data = {'name': name, 'product_id': url_id, 'url': url, 'rate': float(rate),
                          'amazon_rate': float(product_rate), 'image_url': image_url}
        return super().create(validated_data)
