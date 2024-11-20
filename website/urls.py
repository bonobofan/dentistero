from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='website-home'),
    path('about/', views.about, name='website-about'),
    path('private/', views.private, name='website-private'),
    #path('game/', views.game_view, name='website-game'),
    #path('pygame', views.pygame_test, name='website-pygame'),
]