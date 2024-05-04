from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from django.db.models import Count,F

from survey.models import Survey
from .serializers import UserIdSerializer
# Create your views here.

class RecentDocumentView(APIView):

    def get(self, request):
        data = Survey.objects.all().order_by('-modified_date').values('name', 'code', 'id')[:4]
        return Response(data)
    
class SurveyCountView(generics.GenericAPIView):
    serializer_class = UserIdSerializer

    def post(self, request):
        deserializer = self.serializer_class(data = request.data)
        deserializer.is_valid(raise_exception = True)

        user_id = deserializer.validated_data.get('userId')

        surveys = Survey.objects.all()
        category_author = surveys.filter(author_id = user_id).values(categoryName = F('category__name')).annotate(count = Count('id'))
        survey_author = surveys.values(authorName = F('author__firstname')).annotate(count = Count('id'))
        return Response([category_author, survey_author])