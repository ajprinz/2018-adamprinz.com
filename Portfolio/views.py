from django.shortcuts import render
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
import sweetify


def index(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            try:
                send_mail(name, message, from_email, ['adamjosephprinz@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            sweetify.success(request, 'Thank you!', text='Your message has been successfully sent. I’ll get back to you as soon as possible!', persistent='Continue')
    return render(request, 'Portfolio/index.html', {'form': form})
