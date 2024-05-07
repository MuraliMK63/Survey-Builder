from django.db import models


from authentication.models import UserAccount

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    created_by = models.ForeignKey(UserAccount, on_delete = models.CASCADE, default = 1)
    is_active = models.BooleanField(default = True)
    created_date = models.DateTimeField(auto_now_add = True)
    modified_date = models.DateTimeField(auto_now = True)


class Survey(models.Model):
    name = models.CharField(max_length = 100)
    code = models.CharField(max_length = 100)
    content = models.JSONField()
    image = models.TextField(null = True)
    description = models.CharField(max_length = 200)
    category = models.ForeignKey(Category, on_delete = models.DO_NOTHING)
    author = models.ForeignKey(UserAccount, on_delete = models.CASCADE)
    is_active = models.BooleanField(default = True)
    created_date = models.DateTimeField(auto_now_add = True)
    modified_date = models.DateTimeField(auto_now = True)
    