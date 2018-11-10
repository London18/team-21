from django.db import models

# Create your models here.
class Survey(models.Model):
    title = models.CharField(max_length=20, default='survey_title')
    cat = models.CharField(max_length=20)

    def __str__(self):
        return self.title

class Question(models.Model):
    q_type = models.CharField(max_length=20, default='open_text')
    q_text = models.CharField(max_length=200, default="")

    def __str__(self):
        return str(self.q_text)

class ResponseType(models.Model):
    r_type = models.CharField(max_length=20, default='open_text')

class Response(models.Model):
    r_type = models.ForeignKey(ResponseType, on_delete=models.CASCADE) 
    r_text = models.CharField(max_length=200)

    def __str__(self):
        return self.r_text

class User(models.Model):
    user = models.CharField(max_length=20)
    pwd = models.CharField(max_length=20)
    no_stars = models.PositiveIntegerField(default=0)
    no_surveys = models.PositiveIntegerField(default=0)
    t_contributed = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user

class SurveyQuestions(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.survey.title)+'-'+str(self.question.q_text)
    
class UserSurvey(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    s_q = models.ForeignKey(SurveyQuestions, on_delete=models.CASCADE, default=None)
    r_text = models.CharField(max_length=200, default=None)

    def __str__(self):
        return str(user.name)+str(s_q.survey.title)+str(self.id)
