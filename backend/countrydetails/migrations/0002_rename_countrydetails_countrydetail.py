# Generated by Django 4.2.11 on 2024-03-25 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('countrydetails', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CountryDetails',
            new_name='CountryDetail',
        ),
    ]