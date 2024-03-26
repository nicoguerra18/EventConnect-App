from rest_framework import serializers
from .models import UserProfile, Event

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'bio', 'profilePicture')

class EventSerializer(serializers.ModelSerializer):

    profiles = ProfileSerializer(many = True, source = 'UserProfile')

    class Meta:
        model = Event
        fields = ('id', 'name',  'date', 'location', 'description', 'creator')