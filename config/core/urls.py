from . import views
from django.urls import path

urlpatterns = [    
    path('rooms/', views.room_list),
    path('rooms/<int:pk>/', views.room_detail),
    path('posts/', views.post_list),
    path('posts/<int:pk>/', views.post_detail),
]