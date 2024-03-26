from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .serializers import ProfileSerializer, EventSerializer
from .models import UserProfile, Event

# Create your views here.

#class ProfileView(viewsets.ModelViewSet):
 #   serializer_class = ProfileSerializer
  #  queryset = UserProfile.objects.all()

from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
@api_view(['GET','POST'])
def ProfileView(request):

    if request.method == 'GET':
        data = UserProfile.objects.all()
        serializer = ProfileSerializer (data, context = {'request':request}, many = True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
@ensure_csrf_cookie
@api_view(['GET','POST'])
def EventView(request):
    if request.method == 'GET':
        data = Event.objects.all()
        serializer = EventSerializer (data, context = {'request':request}, many = True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)