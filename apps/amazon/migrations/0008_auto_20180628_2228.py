# Generated by Django 2.0.2 on 2018-06-28 20:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0007_auto_20180628_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2018, 6, 28, 22, 27, 58, 991508)),
        ),
    ]