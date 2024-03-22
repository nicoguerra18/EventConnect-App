from rest_framework import serializers
from .models import UserProfile

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length = 100)
    bio = serializers.CharField()
    class Meta:
        model = UserProfile
        fields = ('id', 'username', 'bio')