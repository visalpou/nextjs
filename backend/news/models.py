from django.db import models
from user.models import User
from core.models import CoreModel
from core.utiles import get_file_path

class Tag(CoreModel):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    def __str__(self):
        return self.name
    
class Topic(CoreModel):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    meta_keywords = models.TextField(max_length=500, blank=True)
    slug = models.SlugField(max_length=100, unique=True)
    thumbnail = models.ImageField(upload_to=get_file_path, blank=True)
    def __str__(self):
        return self.name
    
    
    
class News(CoreModel):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    content = models.TextField()
    topics = models.ManyToManyField(Topic,blank=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField(Tag)
    def __str__(self):
        return self.title




