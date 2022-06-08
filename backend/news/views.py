from rest_framework import viewsets, filters
from rest_framework.response import Response
from .serializers import NewsSerializer, TopicSerializer, TagSerializer
from .models import News, Topic, Tag
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.utils.translation import gettext_lazy as _

from core.utiles import upload_image

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    filter_backends = [DjangoFilterBackend,
                       filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['title', ]
    ordering_fields = ['created_at', 'id']

    filterset_fields = {
        'author': ['exact'],
        'topics__name': ['exact'],
        'tags__name': ['exact'],
        'created_at': ['gte', 'lte', 'exact', 'gt', 'lt'],
    }


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


# MARTOR_UPLOAD_URL
@login_required
def markdown_uploader(request):
    """
    Makdown image upload for uploading to imgur.com
    and represent as json to markdown editor.
    """

    def is_ajax(request):
        return request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest"

    if request.method == "POST" and is_ajax(request):
        if "markdown-image-upload" in request.FILES:
            image = request.FILES["markdown-image-upload"]
            response_data = upload_image(image=image)
            return HttpResponse(response_data, content_type="application/json")
        return HttpResponse(_("Invalid request!"))
    return HttpResponse(_("Invalid request!"))


