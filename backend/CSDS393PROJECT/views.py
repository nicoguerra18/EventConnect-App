from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .serializers import *
from .models import *
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
import json
from django.http import JsonResponse
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
@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
def ProfileUpdate(request, user_name):
    try:
        profile = UserProfile.objects.get(username=user_name)
    except UserProfile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PATCH':
        serializer = ProfileSerializer(profile, data= request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

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
            event_name = serializer.validated_data.get('name', '')
            e = Event.objects.get(name = event_name)
            disc = Discussion(event = e, body = '')
            disc.save()
            return Response(status = status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'PUT':
        serializer = EventSerializer(data = request.data)


@ensure_csrf_cookie
@api_view (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def EventUpdate(request, pk):
    try:
        event = Event.objects.get(pk=pk)
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PATCH':
        serializer = ProfileSerializer(event, data= request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        serializer = EventSerializer(event, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        serializer = EventSerializer(event)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        event.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


    #if(text_method == 'GET')
    #input 
    #data = UserProfile.objects.get(username== input)
    #serializer = ~~~
    #return Response (serializer.data)

@api_view(['GET', 'POST'])
def AttendanceView(request):
    if request.method == 'GET':
        data = Attendance.objects.all()
        serializer = AttendanceSerializer(data, many=True)
        return Response(serializer.data)
      
    elif request.method == 'POST':
        try:
            attendance_data = request.data  # Directly use request.data
            event_name = attendance_data.get('event')
            attendee_name = attendance_data.get('attendee')
            is_attending = attendance_data.get('is_attending')

            if not all([event_name, attendee_name, is_attending]):
                return Response({'error': 'Missing required fields'}, status=status.HTTP_400_BAD_REQUEST)

            event = Event.objects.get(name=event_name)
            attendee = UserProfile.objects.get(username=attendee_name)

            # Create and save Attendance object
            attendance = Attendance.objects.create(event=event, attendee=attendee, is_attending=is_attending)
            serializer = AttendanceSerializer(attendance)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

#view that shows all attendees of an event
@api_view(['GET'])
def AttendingEvent(request, event_name):
        queryset = Attendance.getAttending(event_name)
        results = [ob.as_json() for ob in queryset]
        serialized_q = json.dumps(results, cls = DjangoJSONEncoder)
        return Response(serialized_q)

@api_view(['GET'])
def EventsAttending(request, profile_name):
    queryset = Attendance.getEvents(profile_name)
    #serializer = EventSerializer(queryset, many = True)
    #this might also work for showing it as a list
    results =[ob.as_json() for ob in queryset]
    serialized_q = json.dumps(results, cls = DjangoJSONEncoder)
    return Response(serialized_q)

@api_view(['DELETE', 'GET', 'POST', 'PATCH'])
def changeAttending(request, event_name, profile_name):
    try:
        attendance = Attendance.objects.get(event__name = event_name, attendee__profileName = profile_name)
    except Attendance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        attendance.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    

    
    elif request.method == 'PATCH':
        serializer = AttendanceSerializer(attendance, data = request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(status = status.HTTP_202_ACCEPTED)
        
    return Response(status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def CreatedEvents(request, user_name):
    events = Event.createdEvents(user_name)
    #serializer = EventSerializer(events)
    list1 = list(events)
    serialized_events = json.dumps(list1, cls = DjangoJSONEncoder)
    return Response (serialized_events)

@api_view(['GET'])
def eventCoords(request):
    events = Event.objects.all()
    results = [ob.as_json() for ob in events]
    serialized_q = json.dumps(results, cls = DjangoJSONEncoder)
    return Response(serialized_q)

@api_view(['GET'])
def profilesearch(request, user_name):
    profile = UserProfile.objects.get(username = user_name)
    serializer = ProfileSerializer(profile)
    return Response (serializer.data)
@api_view(['GET', 'POST'])
def DiscussionView(request, event_name):
    discussion = Discussion.getDiscussion(event_name)
    serializer = DiscussionSerializer1(discussion)

    return Response(serializer.data)

@api_view(['GET'])
def CommentView(request, event_name):
    if request.method == 'GET':
        comments = Comment.getComments(event_name)
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data)
    print(serializer.errors)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def PostComment(request, event_name, profile_name):
    if request.method == 'POST':
        serializer = CommentSerializer2(data=request.data)
        if serializer.is_valid():
            # Extract the body from the validated data
            body = serializer.validated_data.get('body', '')
            # Create the comment object
            c = Comment(discussion=Discussion.getDiscussion(event_name), body=body, author=UserProfile.objects.get(profileName=profile_name))
            c.save()
            return Response(status=status.HTTP_201_CREATED)
        # If serializer is not valid, return errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST', 'DELETE'])
def GroupView(request, group_name, creator_name):
    if request.method == 'GET':
        group = Group.objects.get(name = group_name,
                              creator = creator_name)#UserProfile.objects.get(profileName = creator_name)) <-- can try this if it doesnt work initially
        serializer = GroupSerializer(group)
        return Response(serializer.data)
    if request.method == 'POST':
        group = Group(name = group_name, creator = creator_name, members = [UserProfile.objects.get(profileName = creator_name)])
        group.save()
        return Response(status = status.HTTP_201_CREATED)
    if request.method == 'DELETE':
        group = Group.objects.get(name = group_name, creator = creator_name)
        group.delete()
        return Response(status = status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
@api_view(['PATCH'])
def AddToGroup(request, group_name, creator_name, member_name):
    profile_to_add = UserProfile.objects.get(profileName = member_name)
    group_to_change = Group.objects.get(name = group_name, creator = creator_name)
    if not group_to_change.members.contains(profile_to_add):
        group_to_change.members.add(profile_to_add)
        return Response(status = status.HTTP_202_ACCEPTED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def InviteView(request, profile_name):
    if request.method == 'GET':
        queryset = Attendance.getInvites(profile_name)
        serializer = AttendanceSerializer(queryset, many = True)
        return Response(serializer.data)
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def InviteResponse(request,  profile_name, event_name, r):
    try:
        attendance = Attendance.objects.get(event__name = event_name, attendee__profileName = profile_name)
    except Attendance.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    is_attending = eval(r)
    Attendance.InviteResponse(profile_name, event_name, is_attending)
    return Response(status = status.HTTP_202_ACCEPTED)

