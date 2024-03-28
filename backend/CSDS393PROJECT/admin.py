from django.contrib import admin
from .models import UserProfile, Event, Attendance
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'bio', 'profilePicture')

class EventAdmin(admin.ModelAdmin):
    # gonna remove date for now
    list_display = ('id', 'creator', 'location', 'description')

class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'attendee', 'is_attending')

admin.site.register(UserProfile, ProfileAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Attendance, AttendanceAdmin )
