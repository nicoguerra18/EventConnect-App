"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from CSDS393PROJECT import views
from rest_framework.urlpatterns import format_suffix_patterns
#router = routers.DefaultRouter()
#router.register(r'UserProfile', views.ProfileView, 'Profiles')
#router.register(r'EventDatabase', views.EventView, 'Events')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('profiles/', views.ProfileView),
    path('EventDatabase/', views.EventView),
    path('EventDatabase/<int:pk>/', views.EventUpdate),
    path('profiles/<int:pk>/', views.ProfileUpdate),
    path('attendance/', views.AttendanceView),
    path('attendingevent/<str:event_name>/', views.AttendingEvent),
    path('eventsattending/<str:profile_name>/', views.EventsAttending),
    path('changeattendance/<str:event_name>/<str:profile_name>/', views.changeAttending),
    path('createdevents/<str:user_name>/', views.CreatedEvents),
    path('eventcoords/', views.eventCoords),
    path('discussion/<str:event_name>/', views.DiscussionView),
    path('discussion/<str:event_name>/comments/', views.CommentView),
    path('comment/<str:profile_name>/<str:event_name>/', views.PostComment),
    ]

urlpatterns= format_suffix_patterns(urlpatterns)
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
