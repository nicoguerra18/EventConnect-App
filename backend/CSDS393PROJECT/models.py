from django.db import models

# Create your models here.
class UserProfile(models.Model):
    username = models.CharField(max_length = 100)
    bio = models.TextField()
    #profilePicture = models.ImageField()

    def _str_(self):
        return self.username