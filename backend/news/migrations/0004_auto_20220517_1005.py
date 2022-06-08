# Generated by Django 3.2.13 on 2022-05-17 03:05

import core.utiles
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_news_topics'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='thumbnail',
            field=models.ImageField(blank=True, upload_to=core.utiles.get_file_path),
        ),
        migrations.AddField(
            model_name='news',
            name='thumbnail_share',
            field=models.ImageField(blank=True, upload_to=core.utiles.get_file_path),
        ),
    ]
