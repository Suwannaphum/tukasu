from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Room, Post
from .serializers import RoomSerializer, PostSerializer

# -------- Room Views --------
@api_view(['GET'])
def room_list(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def room_detail(request, pk):
    room = Room.objects.get(id=pk)
    serializer = RoomSerializer(room)
    return Response(serializer.data)

# -------- Post Views --------
@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def post_detail(request, pk):
    post = Post.objects.get(id=pk)
    serializer = PostSerializer(post)
    return Response(serializer.data)