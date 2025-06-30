from django.shortcuts import render, redirect


#css view
def css(request):
    return render(request, 'Template/allcourses/language/css/default.html')

def css_style(request):
    return render(request, 'Template/allcourses/language/css/css_style.html')