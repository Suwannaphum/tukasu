from django.contrib import admin
from .models import Room, Post, Gallery, ContactInfo
# Register your models here.
admin.site.register(Room)
admin.site.register(Post)
admin.site.register(Gallery)
admin.site.register(ContactInfo)