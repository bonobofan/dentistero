from django.db import models

class VisitorsCount(models.Model):
    count = models.IntegerField(default=0)
