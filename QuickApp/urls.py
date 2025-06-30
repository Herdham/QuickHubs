from django.urls import path
from . import views
from . import courses_view, categories

urlpatterns = [
    path('', views.main, name='main'),
    path('library/', views.library, name='library'),
    path('l_upload/', views.library_upload, name='l_upload'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('forget/', views.forget, name='forget'),
    path('signout/', views.signout, name='signout'),
    path('profile/', views.profile, name='profile'),

    #for categories
    path('web_dev/', categories.web_dev, name='web_dev'),
    path('p_lang/', categories.p_lang, name='p_lang'),
    path('al_ml_ds/', categories.al_ml_ds, name='al_ml_ds'),
    path('edu_course/', categories.edu_course, name='edu_course'),
    path('ar_course/', categories.ar_course, name='ar_course'),
    path('devops/', categories.devops, name='devops'),
    path('database/', categories.database, name='database'),
    path('st_testing/', categories.st_testing, name='st_testing'),
    path('py_tech/', categories.py_tech, name='py_tech'),

    #for html course
    path('html/', views.html_default, name='html'),
    path('html_intro/', views.html_intro, name='html_intro'),
    path('html_editor/', views.html_editor, name='html_editor'),
    path('html_basic/', views.html_basic, name='html_basic'),
    path('html_ele/', views.html_ele, name='html_ele'),
    path('html_attr/', views.html_attr, name='html_attr'),
    path('html_heading/', views.html_heading, name='html_heading'),
    path('html_para/', views.html_para, name='html_para'),
    path('html_style/', views.html_style, name='html_style'),

    #for css course
    path("css/", courses_view.css, name='css'),
    path("css_style/", courses_view.css_style, name='css_style'),

    #for hijamah course
    path('default/', views.hijamah_default, name='default'),
    path('historical/', views.h_historical, name='historical'),
    path('cupping/', views.h_cupping, name='cupping'),
    path('type/', views.h_type, name='type'),
    path('method/', views.h_method, name='method'),
    path('effect/', views.h_effect, name='effect'),
    path('point/', views.h_point, name='point'),

    path('p_default/', views.p_default, name='p_default'),
    path('p_intro/', views.p_intro, name='p_intro'),
    path('p_begin/', views.p_begin, name='p_begin'),
]
