from rest_framework import serializers

from .models import Category, Survey, AssignedSurvey

# Create your serializers here

class AddCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description', 'created_by']

class AddSurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        exclude = ['is_active', 'created_date', 'modified_date', 'image', 'content']

class GetSurveyCodeSerializer(serializers.Serializer):
    categoryName = serializers.CharField()
    userName = serializers.CharField()

class SurveyIdSerializer(serializers.Serializer):
    surveyId = serializers.CharField()

class SurveyIdListSerializer(serializers.Serializer):
    surveyIdList = serializers.JSONField()

class CategoryIdListSerializer(serializers.Serializer):
    categoryIdList = serializers.JSONField()    

class SaveSurveySerializer(SurveyIdSerializer):
    surveyJson = serializers.JSONField()

class AssignSurveySerializer(serializers.Serializer):
    surveyId = serializers.IntegerField()
    message = serializers.CharField()
    dueDate = serializers.DateTimeField()
    assignedBy = serializers.IntegerField()
    users = serializers.JSONField()

