from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth import authenticate, login, logout
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache, cache_control
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.generic import TemplateView

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"Account created for {username}!")
            return redirect('website-home')
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})

# @cache_control(no_cache=True, must_revalidate=True, no_store=True)
# def login_view(request):
#
#     if request.method == 'POST':
#         username = request.POST['username']
#         password = request.POST['password']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             messages.success(request, f'You are now logged in!')
#             return redirect('website-home')
#         else:
#             messages.info(request, f'Login failed!')
#             return redirect('login')
#     else:
#         if request.COOKIES.get('logged_out') == 'true':
#             messages.success(request, 'Du bist raus!')
#             response = render(request, 'users/login.html', {'title': 'muscle Mopssport Login ‍♂'})
#             response.delete_cookie('logged_out')
#             response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
#             response['Pragma'] = 'no-cache'
#             response['Expires'] = '0'
#             return response
#         response = render(request, 'users/login.html', {'title': 'muscle Mopssport Login ‍♂'})
#         response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
#         response['Pragma'] = 'no-cache'
#         response['Expires'] = '0'
#         return response

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Du bist jetzt eingeloggt")
            return redirect('website-home')
        else:
            messages.success(request, "Da gab es einen Fehler, Bitte versuche es nochmal")
            return redirect('login')
    return render(request, 'users/login.html', {})


def logout_user(request):
    logout(request)
    messages.success(request, ("Du bist ausgeloggt."))
    return redirect('website-home')



# class LogoutView(TemplateView):
#     template_name = 'users/logout.html'
#
#     @method_decorator(never_cache)
#     def get(self, request, *args, ** kwargs):
#         logout(request)
#
#         request.session.flush()  # Sitzung explizit beenden
#         response = redirect(f"{reverse('login')}?logged_out=true")
#         response.set_cookie('logged_out', 'true', max_age=10)  # Cookie für 10 Sekunden setzen
#         response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
#         response['Pragma'] = 'no-cache'
#         response['Expires'] = '0'
#         return response