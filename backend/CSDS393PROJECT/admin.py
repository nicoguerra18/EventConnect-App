from django.contrib import admin
from .models import UserProfile, Event
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'bio', 'profilePicture')

class EventAdmin(admin.ModelAdmin):
    # gonna remove date for now
    list_display = ('id', 'creator', 'location', 'description')

admin.site.register(UserProfile, ProfileAdmin)
admin.site.register(Event, EventAdmin)
