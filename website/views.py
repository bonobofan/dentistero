from django.shortcuts import render
from .models import VisitorsCount

def home(request):

    visitor_count = VisitorsCount.objects.get(id=1).count
    return render(request, 'home.html', {'visitor_count': visitor_count})
