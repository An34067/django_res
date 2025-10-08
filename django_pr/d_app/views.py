from django.shortcuts import render, HttpResponse

# Create your views here.
def hello(request):
    text = "Lorem ipsum"
    return render(request, 'main.html', {'my_note': text, 'is_draw_note' : True})
