from django.contrib import admin
from .models import Room, Post, Gallery, ContactInfo
# Register your models here.

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'capacity', 'created_at')
    search_fields = ('name', 'price', 'capacity', 'description')
    list_filter = ('created_at',)

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_published', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('is_published', 'created_at')

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('room',)
    list_filter = ('room',)

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ('email', 'phone')
    search_fields = ('email', 'phone')