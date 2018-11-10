from django.urls import path

from . import views

urlpatterns = [
        path('', views.surveys, name='surveys'),
        path('<str:forSurvey>', views.survey_questions, name='survey_questions'),
]
