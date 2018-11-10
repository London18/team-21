from django.contrib import admin

from .models import Question, Response, User, Survey, UserSurvey, SurveyQuestions 

# Register your models here.

admin.site.register(Question)
admin.site.register(Response)
admin.site.register(User)
admin.site.register(Survey)
admin.site.register(UserSurvey)
admin.site.register(SurveyQuestions)
