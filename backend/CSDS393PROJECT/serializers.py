from rest_framework import serializers
from .models import UserProfile, Event

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'profileName' , 'username', 'password', 'bio', 'profilePicture')

class EventSerializer(serializers.ModelSerializer):

    #profiles = ProfileSerializer(many = True, source = 'UserProfile')

    class Meta:
        model = Event
        # I removed date and added profiles for now
        fields = ('id', 'name', 'location', 'description', 'creator', 'keyword', 'image')