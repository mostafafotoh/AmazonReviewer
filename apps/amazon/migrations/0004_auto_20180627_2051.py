# Generated by Django 2.0.2 on 2018-06-27 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0003_auto_20180627_2024'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
