from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Users(AbstractUser):
    username = models.CharField(max_length=255, null=False, unique=True)
    email = models.CharField(max_length=255, null=False, unique=True)
    password = models.CharField(max_length=255, null=False, unique=False)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username