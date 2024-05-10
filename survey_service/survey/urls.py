from rest_framework.urls import path
from .views import GetCategoryView, GetSurveyView, AddCategoryView, AddSurveyView, GetCodeView, ActivateCategoryView, DeactivateCategoryView
from .views import GetSurveyDetailsView, SaveSurveyView, AssignSurveyView, ActivateSurveyView, DeactivateSurveyView
# Create your urls here

urlpatterns = [
    path('getCategory/', GetCategoryView.as_view(), name = 'get_category_view'),
    path('addCategory/', AddCategoryView.as_view(), name = 'add_category_view'),
    path('getSurvey/', GetSurveyView.as_view(), name = 'get_survey_view'),
    path('addSurvey/', AddSurveyView.as_view(), name = 'add_survey_view'),
    path('getSurveyCode/', GetCodeView.as_view(), name = 'get_survey_code_view'),
    path('getSurveyDetails/', GetSurveyDetailsView.as_view(), name = 'get_survey_details_view'),
    path('saveSurvey/', SaveSurveyView.as_view(), name = 'save_survey_view'),
    path('assignSurvey/', AssignSurveyView.as_view(), name = 'assign_survey_view'),
    path('activateSurvey/', ActivateSurveyView.as_view(), name = 'activate_survey_view'),
    path('deactivateSurvey/', DeactivateSurveyView.as_view(), name = 'deactivate_survey_view'),
    path('activateCategory/', ActivateCategoryView.as_view(), name = 'activate_category_view'),
    path('deactivateCategory/', DeactivateCategoryView.as_view(), name = 'deactivate_category_view')
]