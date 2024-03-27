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
@api_view(['GET', 'PUT', 'DELETE'])
def ProfileUpdate(request, pk):
    try:
        profile = UserProfile.objects.get(pk=pk)
    except UserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProfileSerializer(profile, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        profile.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    

            
    
@ensure_csrf_cookie
@api_view(['GET','POST', 'PUT'])
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
    
    elif request.method == 'PUT':
        serializer = EventSerializer(date = request.data)


    #if(text_method == 'GET')
    #input 
    #data = UserProfile.objects.get(username== input)
    #serializer = ~~~
    #return Response (serializer.data)