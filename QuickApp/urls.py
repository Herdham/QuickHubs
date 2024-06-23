from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('signout/', views.signout, name='signout'),
    path('profile/', views.profile, name='profile'),
    path('become/', views.become, name='become'),
    path('instructor_signup/', views.instructor_signup, name='instructor_signup'),
    path('instructor_signin/', views.instructor_signin, name='instructor_signin'),
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

    #for hijamah course
    path('default/', views.hijamah_default, name='default'),
    path('historical/', views.h_historical, name='historical'),
    path('cupping/', views.h_cupping, name='cupping'),
    path('type/', views.h_type, name='type'),
    path('method/', views.h_method, name='method'),
    path('effect/', views.h_effect, name='effect'),

    path('p_default/', views.p_default, name='p_default'),
    path('p_intro/', views.p_intro, name='p_intro'),
    path('p_begin/', views.p_begin, name='p_begin'),
]
