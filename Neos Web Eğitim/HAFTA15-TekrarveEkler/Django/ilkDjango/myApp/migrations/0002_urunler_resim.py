# Generated by Django 5.0 on 2024-01-16 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='urunler',
            name='resim',
            field=models.FileField(blank=True, null=True, upload_to='urunResimleri'),
        ),
    ]
