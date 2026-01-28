from django.contrib import admin
from django.utils.html import format_html
from .models import Hero, AboutMe, Curriculo, Projeto, Servico, Contato, Skill

@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    fields = ('nome', 'titulo', 'titulo_2', 'titulo_final', 'descricao', 'foto')

@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    fields = ('titulo', 'titulo_destaque', 'descricao', 'foto')

@admin.register(Curriculo)
class CurriculoAdmin(admin.ModelAdmin):
    fields = ('arquivo', 'nome_botao')

@admin.register(Servico)
class ServicoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'icon_preview')
    fields = ('icon', 'titulo', 'descricao')

    def icon_preview(self, obj):
        if obj.icon:
            return format_html('<img src="{}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;" />', obj.icon.url)
        return '-'
    icon_preview.short_description = 'Icon'

@admin.register(Contato)
class ContatoAdmin(admin.ModelAdmin):
    fields = ('titulo', 'subtitulo', 'email')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('nome', 'percentual', 'ordem')
    list_editable = ('percentual', 'ordem')
    ordering = ('ordem',)

@admin.register(Projeto)
class ProjetoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'categoria', 'ordem')
    list_editable = ('ordem',)
    list_filter = ('categoria',)
    ordering = ('ordem',)

