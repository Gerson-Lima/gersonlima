from django.db import models

class Hero(models.Model):
    nome = models.CharField(max_length=200)
    titulo = models.CharField(max_length=200)
    titulo_2 = models.CharField(max_length=200, blank=True, help_text="Segunda parte do título")
    titulo_final = models.CharField(max_length=200, blank=True, help_text="Texto final do título (alinhado à direita)")
    descricao = models.TextField()
    foto = models.ImageField(upload_to='profile/', null=True, blank=True)
    
    class Meta:
        verbose_name = "Hero"
        verbose_name_plural = "Hero"
    
    def __str__(self):
        return f"Hero - {self.nome}"


class AboutMe(models.Model):
    titulo = models.CharField(max_length=200, default="About me")
    titulo_destaque = models.CharField(max_length=100, blank=True, default="me", help_text="Última palavra que aparecerá colorida")
    descricao = models.TextField()
    foto = models.ImageField(upload_to='profile/', null=True, blank=True)
    
    class Meta:
        verbose_name = "Sobre Mim"
        verbose_name_plural = "Sobre Mim"
    
    def __str__(self):
        return "Seção About Me"


class Curriculo(models.Model):
    arquivo = models.FileField(upload_to='curriculo/')
    nome_botao = models.CharField(max_length=100, default="Curriculum")
    
    class Meta:
        verbose_name = "Currículo"
        verbose_name_plural = "Currículo"
    
    def __str__(self):
        return self.nome_botao


class Servico(models.Model):
    icon = models.ImageField(upload_to='services/icons/', null=True, blank=True, help_text="Imagem do ícone (opcional)")
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    
    class Meta:
        verbose_name = "Serviço"
        verbose_name_plural = "Serviços"
    
    def __str__(self):
        return self.titulo


class Contato(models.Model):
    titulo = models.CharField(max_length=200, default="Let's talk")
    subtitulo = models.CharField(max_length=300, default="Questions or remarks? Just write us a message!")
    email = models.EmailField()
    
    class Meta:
        verbose_name = "Configuração de Contato"
        verbose_name_plural = "Configuração de Contato"
    
    def __str__(self):
        return "Contato"


class Skill(models.Model):
    nome = models.CharField(max_length=200)
    percentual = models.IntegerField(default=50, help_text="Porcentagem de 0 a 100")
    ordem = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['ordem']
        verbose_name = "Skill"
        verbose_name_plural = "Skills"
    
    def __str__(self):
        return f"{self.nome} - {self.percentual}%"


class Projeto(models.Model):
    CATEGORIAS = [
        ('uiux', 'UI/UX'),
        ('web', 'Web'),
        ('mobile', 'Mobile'),
    ]
    
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    categoria = models.CharField(max_length=20, choices=CATEGORIAS)
    imagem = models.ImageField(upload_to='projects/')
    link = models.URLField()
    ordem = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['ordem']
        verbose_name = "Projeto"
        verbose_name_plural = "Projetos"
    
    def __str__(self):
        return self.titulo
