from django.contrib import admin
from .models import UserProfile, Event
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'bio', 'profilePicture')

class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'creator', 'location', 'description', 'date')

admin.site.register(UserProfile, ProfileAdmin)
admin.site.register(Event, EventAdmin)
