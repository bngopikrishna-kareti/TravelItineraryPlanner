from django.db import models


# Create your models here.

class Continent(models.Model):
    continent = models.CharField(max_length=20)
    countries = models.CharField(max_length=200)

    def __str__(self):
        return self.continent
