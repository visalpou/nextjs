import uuid
import os

def get_file_path(instance, filename):
    """Chage file name"""
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('image', filename)
