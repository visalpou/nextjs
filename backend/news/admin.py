from django.contrib import admin
from .models import News, Topic, Tag
from django.utils.translation import gettext_lazy as _
from martor.widgets import AdminMartorWidget
from django.db import models
from django.utils.html import mark_safe


# admin site name
admin.site.site_header = 'News Admin'
admin.site.site_title = 'News Admin'    


@admin.register(News)   
class NewsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    list_display = ('title', 'thumbnail_display',
                    'topics_display', 'author', 'created_at')
    list_filter = ('created_at','author','topics')
    search_fields = ('title', 'author')
    ordering = ('-created_at',)
    filter_horizontal = ()
    fieldsets = (
        (None, {'fields': ('title','thumbnail','thumbnail_share', 'description', 'content')}),
        (_('Publishing'), {'fields': ('is_active', 'tags', 'topics')}),
    )
    date_hierarchy = 'created_at'
    readonly_fields = ('thumbnail_display',)
    
    def topics_display(self, obj):
        return ', '.join([topic.name for topic in obj.topics.all()])
    
    def thumbnail_display(self, obj):
        if obj.thumbnail:
            return mark_safe('<img src="%s" width="50px" />' % obj.thumbnail.url)
        else:
            return 'No Image'
    thumbnail_display.allow_tags = True
    thumbnail_display.short_description = 'Thumbnail'
    
    def save_model(self, request, obj, form, change):
        obj.author = request.user
        obj.save()


@admin.register(Topic)  
class TopicAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'slug', 'thumbnail_display')
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

    def thumbnail_display(self, obj):
        if obj.thumbnail:
            return mark_safe('<img src="%s" width="50px" />' % obj.thumbnail.url)
        else:
            return 'No Image'
    thumbnail_display.allow_tags = True
    thumbnail_display.short_description = 'Thumbnail'
    
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
