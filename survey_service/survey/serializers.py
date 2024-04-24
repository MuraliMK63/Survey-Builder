from rest_framework import serializers

from .models import Category, Survey

# Create your serializers here

class AddCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description']

class AddSurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        exclude = ['is_active', 'created_date', 'modified_date', 'image', 'content']

class GetSurveyCodeSerializer(serializers.Serializer):
    categoryName = serializers.CharField()
    userName = serializers.CharField()

class SurveyIdSerializer(serializers.Serializer):
    surveyId = serializers.CharField()