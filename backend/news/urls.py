

from django.urls import path, include
from rest_framework import routers
from .views import NewsViewSet, TopicViewSet, TagViewSet, markdown_uploader

# router

routers = routers.DefaultRouter()
routers.register('news', NewsViewSet)
routers.register('topic', TopicViewSet)
routers.register('tag', TagViewSet)

urlpatterns = routers.urls


urlpatterns += [
    path('martor/image_upload/', markdown_uploader, name='martor_image_upload'),
]
