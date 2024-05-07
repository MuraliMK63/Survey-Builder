from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from survey_service.encryption import encrypt, decrypt
from .serializers import AddUserSerializer, UserPassSerializer, GetUserSerializer
from .models import UserAccount


# Create your views here.

class GetAllUserView(APIView):

    def get(self, request):
        data = UserAccount.objects.all()
        active = data.filter(is_active = True).values('id', 'username', 'firstname', 'lastname', 'role')
        inactive = data.filter(is_active = False).values('id', 'username', 'firstname', 'lastname', 'role')
        return Response([active, inactive])
    
class AddUserView(generics.GenericAPIView):
    serializer_class = AddUserSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        username, password, firstname, lastname, role = deserializer.validated_data.values()
        enc_password = encrypt(password)
        user = UserAccount.objects.filter(username = username)
        if user:
            return Response('Username already taken')
        UserAccount.objects.create(username = username, password = enc_password, firstname = firstname, lastname = lastname, role = role)
        return Response('User Created.', status = status.HTTP_201_CREATED)
    
class VerifyUserView(generics.GenericAPIView):
    serializer_class = UserPassSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        username, password = deserializer.validated_data.values()
        enc_password = encrypt(password)
        user = UserAccount.objects.filter(username = username, password = enc_password)
        if user:
            return Response(user.values().first())
        else:
            return Response("Invalid user.")
