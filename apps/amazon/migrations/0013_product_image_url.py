# Generated by Django 2.0.2 on 2018-06-28 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0012_auto_20180628_2244'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_url',
            field=models.URLField(null=True),
        ),
    ]
