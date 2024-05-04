from django.urls import path

from .views import RecentDocumentView, SurveyCountView
# Create your urls here.

urlpatterns = [
    path('recentDocuments/', RecentDocumentView.as_view(), name = 'recent_document_view'),
    path('surveyCount/', SurveyCountView.as_view(), name = 'survey_count_view')
]