# Generated by Django 4.2.11 on 2024-03-26 01:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('countrydetails', '0002_rename_countrydetails_countrydetail'),
    ]

    operations = [
        migrations.AlterField(
            model_name='countrydetail',
            name='cid',
            field=models.CharField(max_length=200, primary_key=True, serialize=False),
        ),
    ]
