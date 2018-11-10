from django.urls import path

from . import views

urlpatterns = [
        path('/', views.index, name='index'),
        path('survey/', views.survey, name='survey'),
        path('survey/<str:category>/<int:noSurvey>', views.survey, name='survey'),
]
