from django.shortcuts import render, redirect
from .models import LibraryCourse


#for web_dev
def web_dev(request):
    webcourses = LibraryCourse.objects.filter(course_choices="WD").values() 
    return render(request, 'Template/categories/web_dev.html', {'webcourses': webcourses})

#for p_lang
def p_lang(request):
    langcourses = LibraryCourse.objects.filter(course_choices="PRL").values() 
    return render(request, 'Template/categories/p_lang.html', {'langcourses': langcourses})

#for al_ml_ds
def al_ml_ds(request): 
    return render(request, 'Template/categories/al_ml_ds.html')

#for py_tech
def py_tech(request): 
    return render(request, 'Template/categories/py_tech.html')

#for edu_course
def edu_course(request): 
    return render(request, 'Template/categories/edu_course.html')

#for ar_course
def ar_course(request): 
    return render(request, 'Template/categories/ar_course.html')

#for devops
def devops(request): 
    return render(request, 'Template/categories/devops.html')

#for devops
def database(request): 
    return render(request, 'Template/categories/database.html')

def st_testing(request): 
    return render(request, 'Template/categories/st_testing.html')