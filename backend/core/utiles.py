from datetime import datetime
import uuid
import os

def get_file_path(instance, filename):
    """Chage file name"""
    ext = filename.split('.')[-1]
    filename = "%s_%s.%s" % (datetime.now().strftime("%Y%m%d%H%M%S"), uuid.uuid4(), ext)
    return os.path.join('image', filename)


def upload_image(image):
    """Upload image"""
    from django.core.files.base import ContentFile
    from django.core.files.storage import default_storage
    
    # change file name
    filename = "%s_%s.%s" % (datetime.now().strftime("%Y%m%d%H%M%S"), uuid.uuid4(), image.name.split('.')[-1])
    
    image_url = default_storage.save(
        'uploads/' + image, ContentFile(open(image, 'rb').read()))
    image_url = default_storage.url(image_url)
    return {
        'name': image.name,
        'links': image_url,
        'status': 'success',
    }
