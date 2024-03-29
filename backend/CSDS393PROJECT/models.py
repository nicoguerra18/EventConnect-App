from django.db import models
#from location_field.models.spatial import LocationField
#from django.contrib.gis.geos import Point
from django.contrib.auth.models import User
from django.db.models import Count
# Create your models here.

#Model for UserProfile, primary key == id (premade by Django and auto set to primary_key == True)
class UserProfile(models.Model):
    #user = models.OneToOneField(User, on_delete = models.CASCADE)
    profileName = models.CharField(max_length = 100, null = True, blank = True)
    username = models.CharField(max_length = 100, unique = True )
    password = models.CharField(max_length = 100, null = True, blank = True)
    bio = models.TextField()
    profilePicture = models.ImageField(default = 'default.jpg', null=True, blank=True, upload_to= 'profile_pics')
    # currently my "update info" request on the front end just adds a new profile entry
    
    def __str__(self):
        return self.username
    
    def as_json(self):
        return dict(
            input_profileName = self.profileName, input_username = self.username,
            input_password = self.password, input_bio = self.bio,
            input_profilePicture = self.profilePicture
        )
    class Meta:
        ordering = ['id']

#Model for Events, primary key == id, same as above
class Event(models.Model):
    name = models.CharField(max_length = 150)
    # date = models.DateField()
    date = models.CharField(max_length = 150)
    #location = LocationField(based_fields = ['city'], initial= Point(41.5043, 81.6084), zoom = 7) need to figure out installing gdal and getting it to work
    location = models.CharField(max_length = 200)
    creator = models.ForeignKey(UserProfile, to_field = "username", db_column = "creator", on_delete = models.CASCADE)
    description = models.TextField()
    # add field for accpeting a keyword
    keyword = models.CharField(max_length = 100, blank = True, null = True )
    # add field for image file
    image = models.ImageField(default = 'default.jpg')    


    def createdEvents(username):
        eventsCreated = Event.objects.filter(creator = username).values()
        return eventsCreated
    #Ex of how to use it: UserProfile.objects.filter(Events__id = 1) shoud get you all users in the event with id/pk == 1

    def __str__(self):
        return self.name    
    
    def as_json(self):
        return dict(
            input_name = self.name, input_date = self.date,
            input_location = self.location, input_creator = self.creator,
            input_description = self.description, input_keyword = self.keyword,
            input_image = self.image
        )

    class Meta:
        ordering = ['id']

class Attendance(models.Model):
    event = models.ForeignKey(Event, on_delete = models.CASCADE, related_name = 'attendants')
    attendee = models.ForeignKey(UserProfile, on_delete = models.CASCADE, related_name = 'attending')
    is_attending = models.BooleanField(default = False)

    def __str__(self):
        return "%s - %s" %(self.event, self.attendee)
    
    #runs a query to return a queryset of profileNames of those attending a given event
    def getAttending(event_name):
            #this works to get a queryset of just the names of every profile
            #print(UserProfile.objects.filter(attending__event__name= event_name, attending__is_attending=True).values_list('profileName'))
            attendees = UserProfile.objects.filter(attending__event__name= event_name, attending__is_attending=True).distinct()#values_list('profileName')
            return attendees
    
    #runs a query to return a queryset of event names a given profile is attending
    def getEvents(profile_name):
        events = Event.objects.filter(attendants__attendee__profileName = profile_name, attendants__is_attending = True).distinct()#.values_list('name')
        return events
    #event_name and profile_name string, input is boolean
    def changeAttendance(event_name, profile_name, input):
        attendance = Attendance.objects.get(attendee_profileName = profile_name, event__name = event_name)
        attendance.is_attending = input