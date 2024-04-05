from rest_framework import serializers
from .models import UserAccount

# Create your serializers here

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = '__all__'


class AddUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    firstname = serializers.CharField()
    lastname = serializers.CharField()
    role = serializers.CharField()

class UserPassSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
