from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
from .models import Hero, AboutMe, Curriculo, Projeto, Servico, Contato, Skill

def index(request):
    hero = Hero.objects.first()
    about = AboutMe.objects.first()
    curriculo = Curriculo.objects.first()
    projetos = Projeto.objects.all()
    servicos = Servico.objects.all()
    skills = Skill.objects.all()
    contato = Contato.objects.first()
    
    # compute safe URL for curriculo (Cloudinary storage may raise if not configured)
    curriculo_url = None
    if curriculo and getattr(curriculo, 'arquivo', None):
        try:
            curriculo_url = curriculo.arquivo.url
        except Exception:
            # fall back to path using MEDIA_URL + name if available
            nome = getattr(curriculo.arquivo, 'name', None)
            if nome:
                from django.conf import settings as _settings
                curriculo_url = f"{_settings.MEDIA_URL}{nome}"

    return render(request, 'index.html', {
        'hero': hero,
        'about': about,
        'curriculo': curriculo,
        'curriculo_url': curriculo_url,
        'projetos': projetos,
        'servicos': servicos,
        'skills': skills,
        'contato': contato,
    })

@require_http_methods(["POST"])
def enviar_email(request):
    """Enviar email de contato"""
    nome = request.POST.get('nome', '')
    email = request.POST.get('email', '')
    mensagem = request.POST.get('mensagem', '')
    
    if nome and email and mensagem:
        try:
            contato = Contato.objects.first()
            destinatario = contato.email if contato else settings.DEFAULT_FROM_EMAIL
            
            send_mail(
                subject=f'Nova mensagem de {nome}',
                message=f'De: {email}\n\n{mensagem}',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[destinatario],
                fail_silently=False,
            )
            return render(request, 'index.html', {'mensagem_sucesso': True})
        except Exception as e:
            return render(request, 'index.html', {'mensagem_erro': True})
    
    return render(request, 'index.html', {'mensagem_erro': True})

