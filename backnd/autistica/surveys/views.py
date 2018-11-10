from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from surveys.models import Survey, SurveyQuestions


# Create your views here.
def index(request):
    return HttpResponse("Testing...")

def survey(request, survey='all'):
    json_questions = fetchQuestions(survey)
    print(json_questions)
    return JsonResponse(json_questions, safe=False)

def dashboard(request):
    return HttpResponse("Dashboard")

def fetchQuestions(forSurvey='all'):
    query = []
    if forSurvey=='all':
        query = SurveyQuestions.objects.all()
    else:
        surveyId = -1
        try:
            surveyId = Survey.objects.get(title=forSurvey).id
        except Survey.DoesNotExist:
            surveyId = -1

        if surveyId >= 0:  
            query = SurveyQuestions.objects.filter(survey=surveyId)

    objList = []
    
    for data in query:
        objList.append({'qText': data.question.question_text, 'qType': data.question.qtype})

    json_query = json.dumps(objList)
    return json_query


