from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from surveys.models import SurveyQuestions


# Create your views here.
def index(request):
    return HttpResponse("Testing...")

def survey(request, sCategory='all', sTitle='1'):
    json_questions = fetchQuestions()
    print(json_questions)
    return JsonResponse(json_questions, safe=False)

def dashboard(request):
    return HttpResponse("Dashboard")

def fetchQuestions(forSurvey='all'):
    if forSurvey=='all':
        query = SurveyQuestions.objects.all()
        objList = []
        for data in query:
            objList.append({'qText': data.question.question_text, 'qType': data.question.qtype})

        print(objList)
        json_query = json.dumps(objList)
        return json_query


