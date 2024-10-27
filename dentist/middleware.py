from django.utils.deprecation import MiddlewareMixin
from website.models import VisitorsCount

class VisitorCountMiddleware(MiddlewareMixin):
    def process_request(self, request):
        visitor_count, created = VisitorsCount.objects.get_or_create(id=1)
        visitor_count.count += 1
        visitor_count.save()