from rest_framework import serializers
from .models import UserAccount

# Create your serializers here

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = '__all__'


class AddUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['username', 'password', 'firstname', 'lastname', 'role']

class UserPassSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class UserIdListSerializer(serializers.Serializer):
    userIdList = serializers.JSONField()
