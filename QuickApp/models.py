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

class LibraryCourse(models.Model):
    class CoursesChoices(models.TextChoices):
        WEBDEV = 'WD', "Web Development"
        MOBDEV = "MD", "Mobile Developement"
        PRLANG = "PRL", "Programming Language"
        EDUCATION = 'ED', "Educational Courses"
        ARABIC = 'AR', "Arabic Courses"
        
    course_name = models.CharField(max_length=255, null=False)
    course_link = models.CharField(max_length=255, null=False)
    reference = models.CharField(max_length=255, null=False)
    course_choices = models.CharField(max_length=100, choices=CoursesChoices.choices)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.course_name