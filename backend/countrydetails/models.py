from django.db import models


# Create your models here.
class CountryDetail(models.Model):
    cid = models.CharField(primary_key=True, max_length=200)
    title = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    categories = models.TextField()
    imageUrls = models.TextField()
    longitude = models.DecimalField(max_digits=10, decimal_places=6)
    latitude = models.DecimalField(max_digits=10, decimal_places=6)
    country = models.CharField(max_length=200, null=False)

    def __str__(self):
        return self.title
