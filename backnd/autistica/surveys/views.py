from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from surveys.models import User, Response, Survey, SurveyQuestions, Question, UserSurvey
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    return HttpResponse("Testing...")

@csrf_exempt
def survey_questions(request, forSurvey='all'):
    if request.method == 'GET':
        json_questions = fetchQuestions(forSurvey)
        print(json_questions)
        return JsonResponse(json_questions, safe=False)
    elif request.method == 'POST':
        # username = request.POST.get('username')
        # print(username)
        response_json = json.loads(request.body)
        print(response_json)
        user_id = response_json.get("userid")
        surveyT = response_json.get("surveyTitle")
        qid = response_json.get("questionId")
        rsp = response_json.get("answer")

        usr = None
        survey_q = None
        usr = User.objects.get_or_create(user=user_id,
                                          pwd='pls_no_hax',
                                          no_stars=1,
                                          no_surveys=1,
                                          t_contributed=1)
        try:
            survey_q = SurveyQuestions.objects.filter(survey__title=surveyT, question=qid)[0]
        except:
            survey_q = SurveyQuestions.objects.filter(survey__title=surveyT, question=qid)[0]

        userData = UserSurvey.objects.create(user=usr[0], s_q=survey_q, r_text=rsp)
        userData.save()

        return HttpResponse("Working")

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
            'qtext': data.question.q_text,
            'qtype': data.question.q_type,
            })

    json_query = json.dumps(objList)
    return json_query


