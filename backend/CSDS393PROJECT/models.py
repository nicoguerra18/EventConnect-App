from django.db import models
#from location_field.models.spatial import LocationField
#from django.contrib.gis.geos import Point
from django.contrib.auth.models import User
# Create your models here.

#Model for UserProfile, primary key == id (premade by Django and auto set to primary_key == True)
class UserProfile(models.Model):
    #user = models.OneToOneField(User, on_delete = models.CASCADE)
    profileName = models.CharField(max_length = 100, null = True, blank = True)
    username = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100, null = True, blank = True)
    bio = models.TextField()
    profilePicture = models.ImageField(null=True, blank=True)
    # currently my "update info" request on the front end just adds a new profile entry
    
    def __str__(self):
        return self.username
    
    class Meta:
        ordering = ['id']

#Model for Events, primary key == id, same as above
class Event(models.Model):
    name = models.CharField(max_length = 150)
    # date = models.DateField()
    date = models.CharField(max_length = 150)
    #location = LocationField(based_fields = ['city'], initial= Point(41.5043, 81.6084), zoom = 7) need to figure out installing gdal and getting it to work
    location = models.CharField(max_length = 200)
    creator = models.CharField(max_length = 100)
    description = models.TextField()
    # add field for accpeting a keyword
    keyword = models.CharField(max_length = 100, blank = True, null = True )
    # add field for image file
    image = models.ImageField(default = 'default.jpg')    

    #creates many to many with UserProfile
    #attendees = models.ManyToManyField(UserProfile, related_name = 'profiles')

    #Ex of how to use it: UserProfile.objects.filter(Events__id = 1) shoud get you all users in the event with id/pk == 1

    def __str__(self):
        return self.name
    
    def attendees(self):
        return UserProfile.objects.filter(pk = self.id)
        #UserProfile JOIN Event WHERE 
    
    class Meta:
        ordering = ['id']