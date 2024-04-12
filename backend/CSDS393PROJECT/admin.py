from django.contrib import admin
from .models import UserProfile, Event, Attendance, Discussion, Comment
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'bio', 'profilePicture')

class EventAdmin(admin.ModelAdmin):
    # gonna remove date for now
    list_display = ('id', 'creator', 'location', 'description')

class AttendanceAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'attendee', 'is_attending')

class DiscussionAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'created_at', 'body' )

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'discussion', 'body', 'author', 'timestamp')

admin.site.register(UserProfile, ProfileAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Attendance, AttendanceAdmin )
admin.site.register(Discussion, DiscussionAdmin )
admin.site.register(Comment, CommentAdmin)
