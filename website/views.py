from django.shortcuts import render
from .models import VisitorsCount
from django.contrib.auth.decorators import login_required
def about(request):
    return render(request, 'website/about.html',
                  {'title': '💪 Mopssport About 👯‍♂'})


def home(request):

    visitor_count = VisitorsCount.objects.get(id=1).count
    return render(request, 'website/home.html', {'visitor_count': visitor_count, 'title': '💪 Mopssport Workout Site 👯‍♂'})
@login_required
def private(request):
    return render(request, 'website/private.html',
                  {'title': '💪 Mopssport Private Room 👯‍♂'})
