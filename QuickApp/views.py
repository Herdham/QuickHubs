from django.shortcuts import render, redirect
from django.template import loader
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import LibraryCourse, Users
# Create your views here.

#for main page
def main(request):
    template = loader.get_template('Template/main.html')
    return HttpResponse(template.render())

#for library
def library(request):
    library = LibraryCourse.objects.all()
    return render(request, 'Template/library.html', {'library': library})

#for libraryupload
@login_required(login_url='/signin')
@user_passes_test(lambda user: user.is_superuser)
def library_upload(request):
    librarychoices = LibraryCourse.CoursesChoices
    if request.method == "POST":
        course_name = request.POST.get("name")
        course_link = request.POST.get("link")
        course_choices = request.POST.get("choices")
        if not course_link.startswith('/'):
            messages.info(request, "Invalid Link")
            return redirect('/l_upload')
        else:
            LibraryCourse.objects.create(course_name=course_name, course_link=course_link, course_choices=course_choices)
            return redirect('/l_upload')
    else:
        return render(request, 'Template/l_upload.html', {'librarychoices': librarychoices})

#for signup page
def signup(request):
    if request.method == 'POST':
        User = get_user_model()
        username = request.POST.get("user")
        email = request.POST.get("email")
        password = request.POST.get("pass")
        cpassword = request.POST.get("cpass")

        if password != cpassword:
            messages.info(request, "Password Not Matched")
            return redirect('/signup')
        else:
            if User.objects.filter(email=email).exists():
                messages.info(request, "Email already exist")
                return redirect('/signup')
            elif User.objects.filter(username=username).exists():
                messages.info(request, "Username already exit")
                return redirect('/signup')
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                return redirect('/signin')
    else:
        return render(request, 'Template/signup.html')

#for signin page
def signin(request):
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("pass")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/profile')
        else:
            messages.info(request, 'Username is or password is incorrect')

    return render(request, 'Template/signin.html')

#for forget_password
def forget(request):
    User = get_user_model()
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("pass")
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            user.set_password(password)
            if user.is_superuser:
                messages.info(request, "Password doest allowed to change here")
                return redirect('/forget')
            else:
                user.save()
                messages.info(request, "Password Reset Successfully")
                return redirect('/signin')    
        else:
            messages.info(request, "It is not")
            return redirect('/forget')
    else:
        return render(request, 'Template/forget.html')

#for student_profile
@login_required(login_url='signin')
def profile(request):
    User = get_user_model()
    username = User.objects.all()
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

def h_point(request):
    template = loader.get_template('Template/allcourses/arabic_course/hijamah/hijamah_point.html')
    return HttpResponse(template.render())

#for python course
def p_default(request):
    return render(request, 'Template/allcourses/language/python/default.html')

def p_intro(request):
    return render(request, 'Template/allcourses/language/python/p_intro.html')

def p_begin(request):
    return render(request, 'Template/allcourses/language/python/p_begin.html')