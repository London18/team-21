from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from surveys.models import Survey, SurveyQuestions


# Create your views here.
def index(request):
    return HttpResponse("Testing...")

def survey_questions(request, survey='all'):
    json_questions = fetchQuestions(survey)
    print(json_questions)
    return JsonResponse(json_questions, safe=False)

def surveys(request, survey='all'):
    json_surveys = fetchSurveys()
    print(json_surveys)
    return JsonResponse(json_surveys, safe=False)

def fetchSurveys():
    query = []
    query = Survey.objects.all()

    objList = []
    
    for data in query:
        objList.append({'title': data.title})

    json_query = json.dumps(objList)
    return json_query

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
        objList.append({
            'id': data.question.id,
            'qtext': data.question.question_text,
            'qtype': data.question.qtype,
            })

    json_query = json.dumps(objList)
    return json_query


