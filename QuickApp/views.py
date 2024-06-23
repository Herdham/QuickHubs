from django.shortcuts import render, redirect
from django.template import loader
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import HttpResponse
# Create your views here.

#for main page
def main(request):
    template = loader.get_template('Template/main.html')
    return HttpResponse(template.render())

#for signup page
def signup(request):
    if request.method == 'POST':
        first = request.POST['first']
        uname = request.POST['user']
        email = request.POST['email']
        password = request.POST['pass']
        if len(password) < 6:
            messages.info(request, 'Password must be atleast 6 character')
        elif User.objects.filter(email=email).exists():
            messages.info(request, 'Email has been taken')
        else:
            my_user = User.objects.create_user(uname, email, password, first)
            my_user.save()
            return redirect('signin')
    
    return render(request, 'Template/signup.html')

#for signin page
def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        pass1 = request.POST['pass']
        user = authenticate(request, username=username, password=pass1)
        if user is not None:
            login(request, user)
            return redirect('profile')
        else:
            messages.info(request, 'Username is or password is incorrect')

    return render(request, 'Template/signin.html')

#for student_profile
@login_required(login_url='signin')
def profile(request):
    username = User.objects.all().values()
    context = {'username': username}
    return render(request, 'Template/profile.html', context)

#for logout
@login_required(login_url='signin')
def signout(request):
    logout(request)
    return redirect('signin')


#for become page
def become(request):
      return render(request, 'Template/teacher_template/become_instructor.html')  

#for instructor signup
def instructor_signup(request):
    return render(request, 'Template/teacher_template/teacher_signup.html')

#for instructor signin
def instructor_signin(request):
    template = loader.get_template('Template/teacher_template/teacher_signin.html')
    return HttpResponse(template.render())

#for html tutorial
def html_default(request):
    template = loader.get_template('Template/allcourses/language/html/default.html')
    return HttpResponse(template.render())

def html_intro(request):
    template = loader.get_template('Template/allcourses/language/html/html_intro.html')
    return HttpResponse(template.render())

def html_editor(request):
    template = loader.get_template('Template/allcourses/language/html/html_editor.html')
    return HttpResponse(template.render())

def html_basic(request):
    template = loader.get_template('Template/allcourses/language/html/html_basic.html')
    return HttpResponse(template.render())

def html_ele(request):
    template = loader.get_template('Template/allcourses/language/html/html_element.html')
    return HttpResponse(template.render())

def html_attr(request):
    template = loader.get_template('Template/allcourses/language/html/html_attr.html')
    return HttpResponse(template.render())

def html_heading(request):
    template = loader.get_template('Template/allcourses/language/html/html_heading.html')
    return HttpResponse(template.render())

def html_para(request):
    template = loader.get_template('Template/allcourses/language/html/html_paragraph.html')
    return HttpResponse(template.render())

def html_style(request):
    template = loader.get_template('Template/allcourses/language/html/html_style.html')
    return HttpResponse(template.render())

#for hijamah tutorial
def hijamah_default(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/default.html')
    return HttpResponse(template.render())

def h_historical(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/historical.html')
    return HttpResponse(template.render())

def h_cupping(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/cupping.html')
    return HttpResponse(template.render())

def h_type(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/hijamah_type.html')
    return HttpResponse(template.render())

def h_method(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/method.html')
    return HttpResponse(template.render())

def h_effect(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/effect.html')
    return HttpResponse(template.render())

#for python course
def p_default(request):
    return render(request, 'Template/allcourses/language/python/default.html')

def p_intro(request):
    return render(request, 'Template/allcourses/language/python/p_intro.html')

def p_begin(request):
    return render(request, 'Template/allcourses/language/python/p_begin.html')