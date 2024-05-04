from rest_framework.urls import path
from .views import GetCategoryView, GetSurveyView, AddCategoryView, AddSurveyView, GetCodeView, GetSurveyDetailsView, SaveSurveyView
# Create your urls here

urlpatterns = [
    path('getCategory/', GetCategoryView.as_view(), name = 'get_category_view'),
    path('addCategory/', AddCategoryView.as_view(), name = 'add_category_view'),
    path('getSurvey/', GetSurveyView.as_view(), name = 'get_survey_view'),
    path('addSurvey/', AddSurveyView.as_view(), name = 'add_survey_view'),
    path('getSurveyCode/', GetCodeView.as_view(), name = 'get_survey_code_view'),
    path('getSurveyDetails/', GetSurveyDetailsView.as_view(), name = 'get_survey_details_view'),
    path('saveSurvey/', SaveSurveyView.as_view(), name = 'save_survey_view')
]