from django.shortcuts import render, HttpResponse

# Create your views here.
# def hello(request):
#     text = "Lorem ipsum"
#     return render(request, 'main.html', {'my_note': text, 'is_draw_note' : True})

def home(request):
    return render(request, 'home.html')

def menu(request):
    return render(request, 'home.html')

def reservation(request):
    return render(request, 'home.html')

def account(request):
    return render(request, 'home.html')