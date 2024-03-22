# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .serializers import ProfileSerializer
from .models import UserProfile

# Create your views here.

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = UserProfile.objects.all()


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
