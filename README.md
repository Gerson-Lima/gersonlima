# 🎨 Portfólio Dinâmico com Django

Portfólio pessoal desenvolvido com **Django 5.0**, com painel administrativo para gerenciar conteúdos de forma simples e prática.

🌐 **Acesse o projeto online:**  
👉 https://gersonlima.onrender.com/

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/PersonalLandingPage.git
cd PersonalLandingPage
```

2. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Crie um arquivo `.env` baseado em `.env.example`:
```bash
cp .env.example .env
```

5. Configure o `.env` com seus valores

6. Rode as migrações:
```bash
python manage.py migrate
```

7. Crie um superusuário:
```bash
python manage.py createsuperuser
```

8. Inicie o servidor:
```bash
python manage.py runserver
```

Acesse:
- **Site**: http://localhost:8000
- **Admin**: http://localhost:8000/admin

## 📦 Estrutura do Projeto

- `config/` - Configurações Django
- `portfolio/` - App principal com models, views e templates
- `assets/` - CSS, JavaScript e imagens estáticas
- `media/` - Uploads de usuários

## 📌 Antes de fazer Deploy

1. Configure `SECRET_KEY` no `.env` com uma chave segura
2. Configure `DEBUG=False` no `.env`
3. Configure `ALLOWED_HOSTS` com seu domínio
4. Use um banco de dados em produção (PostgreSQL recomendado)
5. Configure um servidor WSGI (Gunicorn)
6. Configure um servidor web (Nginx)
7. Use HTTPS
8. Configure as variáveis de email se necessário

## 🌐 Deploy Recomendado

- Heroku, Render, Railway, ou DigitalOcean
- PostgreSQL para banco de dados
- AWS S3 ou similar para media files

## ✨ Funcionalidades

✅ Painel Admin para gerenciar:
- Perfil (Hero section)
- Sobre mim
- Skills com percentual
- Projetos com categorias
- Serviços
- Contato

✅ Layout responsivo com Bootstrap 5.3.3
✅ Upload de imagens
✅ Email de contato

## 🛠 Tecnologias

- Django 5.0
- Bootstrap 5.3.3
- Pillow (processamento de imagens)
- python-decouple (variáveis de ambiente)

---

Feito por Gerson Lima
