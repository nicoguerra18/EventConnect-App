from django.contrib import admin
from .models import UserProfile
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'bio', 'profilePicture')

admin.site.register(UserProfile, ProfileAdmin)
