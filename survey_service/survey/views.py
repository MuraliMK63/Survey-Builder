from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F

import json

from .serializers import AddCategorySerializer, AddSurveySerializer, GetSurveyCodeSerializer, SurveyIdSerializer
from .serializers import SaveSurveySerializer, AssignSurveySerializer, SurveyIdListSerializer, CategoryIdListSerializer
from .models import Survey, Category, AssignedSurvey

# Create your views here.

class GetCategoryView(APIView):
    def get(self, request):
        data = Category.objects.all()
        active = data.filter(is_active = True).values('id', 'name', 'description', createdBy = F('created_by__id'))
        inactive = data.filter(is_active = False).values()
        return Response([active, inactive])

class AddCategoryView(generics.GenericAPIView):
    serializer_class = AddCategorySerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        name, description, created_by = deserializer.validated_data.values()
        Category.objects.create(name = name, description = description, created_by = created_by)
        return Response('Category Created.')
    
class ActivateCategoryView(generics.GenericAPIView):
    serializer_class = CategoryIdListSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        category_ids = deserializer.validated_data['categoryIdList']
        categories = Category.objects.filter(id__in = category_ids)
        if categories:
            categories.update(is_active = True)
            return Response('Activated Sucessfully.')
        else:
            return Response('No Category Found.')
        
class DeactivateCategoryView(generics.GenericAPIView):
    serializer_class = CategoryIdListSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        category_ids = deserializer.validated_data['categoryIdList']
        categories = Category.objects.filter(id__in = category_ids)
        if categories:
            categories.update(is_active = False)
            return Response('Deactivated Sucessfully.')
        else:
            return Response('No Category Found.')

class GetSurveyView(APIView):
    def get(self, request):
        data = Survey.objects.all()
        active = data.filter(is_active = True).values()
        inactive = data.filter(is_active = False).values()
        return Response([active, inactive])
    

class AddSurveyView(generics.GenericAPIView):
    serializer_class = AddSurveySerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        name, code, description, category, author = deserializer.validated_data.values()
        survey_content = {"surveyName": name, "description":  description, "elements": []}
        survey = Survey.objects.create(name = name, code = code, description = description, category = category, author = author, content = survey_content)
        return Response(survey.id)
    

class GetCodeView(generics.GenericAPIView):
    serializer_class = GetSurveyCodeSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        category_name, username = deserializer.validated_data.values()
        survey_count = Survey.objects.filter(category__name = category_name, author__username = username).count()
        survey_code = category_name.upper()[:3] + "_" + username.upper()[:3] + "_" + str(survey_count + 1)
        return Response(survey_code)


class GetSurveyDetailsView(generics.GenericAPIView):
    serializer_class = SurveyIdSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        surveyid = deserializer.validated_data['surveyId']
        if not surveyid.isnumeric():
            return Response('Invalid surveyid!')
        survey = Survey.objects.filter(id = surveyid)
        if not survey:
            return Response('No survey found!')
        else:
            return Response(survey.first().content)
        
class SaveSurveyView(generics.GenericAPIView):
    serializer_class = SaveSurveySerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        survey_id, survey_json = deserializer.validated_data.values()
        survey = Survey.objects.filter(id = survey_id)
        if not survey:
            return Response('No Survey Found!')
        else:
            current_survey = survey.first()
            current_survey.content = survey_json
            current_survey.save()
            return Response('Saved Sucessfully!')

class AssignSurveyView(generics.GenericAPIView):
    serializer_class = AssignSurveySerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        surveyId, message, dueDate, assignedBy, users = deserializer.validated_data.values()
        AssignedSurvey.objects.create(survey_id = surveyId, users = users, message = message, duedate = dueDate, assigned_by_id = assignedBy, modified_by_id = assignedBy)
        return Response ("Assigned Sucessfully.")
    

class ActivateSurveyView(generics.GenericAPIView):
    serializer_class = SurveyIdListSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        survey_ids = deserializer.validated_data['surveyIdList']
        surveys = Survey.objects.filter(id__in = survey_ids)
        if surveys:
            surveys.update(is_active = True)
            return Response('Activated Sucessfully.')
        else:
            return Response('No Surveys Found.')
        
class DeactivateSurveyView(generics.GenericAPIView):
    serializer_class = SurveyIdListSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        survey_ids = deserializer.validated_data['surveyIdList']
        surveys = Survey.objects.filter(id__in = survey_ids)
        if surveys:
            surveys.update(is_active = False)
            return Response('Deactivated Sucessfully.')
        else:
            return Response('No Surveys Found.')