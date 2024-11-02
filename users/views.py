from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth import authenticate, login, logout

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


def login_view(request):

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f'You are now logged in!')
            return redirect('website-home')
        else:
            messages.info(request, f'Login failed!')
            return redirect('login')
    else:
        return render(request, 'users/login.html',{'title': '💪 Mopssport Login 👯‍♂'})


def logout_view(request):
    logout(request)
    messages.success(request, f'You have been logged out!')
    return redirect('login')
