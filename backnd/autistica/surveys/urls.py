from django.urls import path

from . import views

urlpatterns = [
        path('', views.survey, name='survey'),
        path('<str:survey>', views.survey, name='survey'),
]
