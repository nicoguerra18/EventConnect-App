from rest_framework import serializers
from .models import *
from datetime import datetime

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'profileName' , 'username', 'password', 'bio', 'profilePicture')


class BooleanFieldFromString(serializers.BooleanField):
#turns string to bool for event serializer 
    def to_internal_value(self, data):
        if isinstance(data, str):
            data = data.lower()
            if data == 'true':
                return True
            elif data == 'false':
                return False
        return super().to_internal_value(data)

class EventSerializer(serializers.ModelSerializer):

    #profiles = ProfileSerializer(many = True, source = 'UserProfile')
    def toEvent(self):
        return Event(**self.validated_data)
    class Meta:
        model = Event
        # I removed date and added profiles for now
        fields = ('id', 'name', 'location', 'description', 'creator', 'keyword', 'image', 'date', 'is_private')

class EventSerializer2(serializers.ModelSerializer):
    is_private = BooleanFieldFromString()
    class Meta:
        model = Event
        fields = ('id', 'name', 'location', 'description', 'creator', 'keyword', 'image', 'date', 'is_private') 

class AttendanceSerializer(serializers.ModelSerializer):
    event = EventSerializer()
    attendee = ProfileSerializer()
    class Meta:
        model = Attendance
        fields = ('event', 'attendee', 'is_attending', 'responded')

class DiscussionSerializer1(serializers.ModelSerializer):
    event = EventSerializer()
    class Meta:
        model = Discussion
        fields = ('event', 'created_at', 'body')

class DiscussionSerializer2(serializers.ModelSerializer):
    event = EventSerializer()
    created_at = serializers.DateTimeField()
    body = serializers.CharField(max_length = 500)

    class Meta:
        model = Discussion
        fields = ('event', 'created_at', 'body')


class CommentSerializer(serializers.ModelSerializer):
    
    discussion = DiscussionSerializer1()
    class Meta:
        model = Comment
        fields = ('discussion', 'body', 'timestamp', 'author')

class CommentSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('body',)

class GroupSerializer(serializers.ModelSerializer):
    members = ProfileSerializer(many = True)

    class Meta:
        model = Group
        fields = ('name', 'members', 'creator')