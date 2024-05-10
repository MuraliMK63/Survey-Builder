from django.urls import path
from .views import GetAllUserView, AddUserView, VerifyUserView, ActivateUserView, DeactivateUserView

# Create your urls here

urlpatterns = [
    path('getUser/', GetAllUserView.as_view(), name = 'get_all_user'),
    path('addUser/', AddUserView.as_view(), name = 'add_user_view'),
    path('verifyUser/', VerifyUserView.as_view(), name = 'verify_user_view'),
    path('activateUser/', ActivateUserView.as_view(), name = 'activate_user_view'),
    path('deactivateUser/', DeactivateUserView.as_view(), name = 'deactivate_user_view')
]