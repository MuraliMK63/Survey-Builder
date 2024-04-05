from django.db import models

# Create your models here.

class UserAccount(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 100)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    role = models.CharField(max_length = 50)
    is_active = models.BooleanField(default = True)
    created_date = models.DateTimeField(auto_now_add = True)
    modified_date = models.DateTimeField(auto_now = True)
    last_login = models.DateTimeField(null = True)

    @property
    def fullname(self):
        return self.firstname + ' ' + self.lastname
    
    @property
    def initials(self):
        return self.firstname[0] + ' ' + self.lastname[0]