from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Testing...")

def survey(request, sCategory, sTitle):
    return HttpResponse("Category [...]")

def dashboard(request):
    return HttpResponse("Dashboard")
