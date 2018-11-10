from django.db import models

# Create your models here.
class Question(models.Model):
    qtype = models.CharField(max_length=20, default='open_text')
    question_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text

    def qcat(self):
        return self.qtype

class Response(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    rtype = models.CharField(max_length=20)
    response_text = models.CharField(max_length=200)

    def __str__(self):
        return self.response_text

    def rtype(self):
        return self.rtype

class User(models.Model):
    username = models.CharField(max_length=20)
    pwd = models.CharField(max_length=20)

    def __str__(self):
        return self.username

class Survey(models.Model):
    title = models.CharField(max_length=20, default='survey_title')
    category = models.CharField(max_length=20)

    def __str__(self):
        return self.title

class SurveyQuestions(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    
class UserSurvey(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    #response = models.ForeignKey(Response, on_delete=models.CASCADE)

    def __str__(self):
        return "Survey"+str(self.id)
