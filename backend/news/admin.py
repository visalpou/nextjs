from django.contrib import admin
from .models import News, Topic, Tag
from django.utils.translation import gettext_lazy as _
from martor.widgets import AdminMartorWidget
from django.db import models

# admin site name
admin.site.site_header = 'News Admin'
admin.site.site_title = 'News Admin'    


@admin.register(News)   
class NewsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    list_display = ('title', 'author', 'created_at')
    list_filter = ('created_at','author')
    search_fields = ('title', 'author')
    ordering = ('-created_at',)
    filter_horizontal = ()
    fieldsets = (
        (None, {'fields': ('title', 'description', 'content', 'author')}),
        (_('Publishing'), {'fields': ('is_active', 'tags', 'topics')}),
    )
    date_hierarchy = 'created_at'


@admin.register(Topic)  
class TopicAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'slug', 'thumbnail')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('name', 'description')
    ordering = ('-created_at',)
    filter_horizontal = ()
    fieldsets = (
        (None, {'fields': ('name', 'slug', 'thumbnail')}),
        (_('Meta'), {'fields': ('meta_keywords', 'description')}),
        (_('Publishing'), {'fields': ('is_active',)}),
    )
    date_hierarchy = 'created_at'
    
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    list_filter = ('created_at',)
    search_fields = ('name', 'slug')
    ordering = ('-created_at',)
    filter_horizontal = ()
    fieldsets = (
        (None, {'fields': ('name', 'slug')}),
    )
    date_hierarchy = 'created_at'
