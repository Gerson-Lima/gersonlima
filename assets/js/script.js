document.addEventListener('DOMContentLoaded', function() {
    // Encontra o botão de hamburguer na barra de navegação
    let toggler = document.querySelector('.navbar-toggler');
    // Encontra a área que contém o menu da barra de navegação
    let navbarCollapse = document.querySelector('.navbar-collapse');

    // Adiciona um evento de clique no botão de hamburguer
    toggler.addEventListener('click', function() {
        // Alterna (liga/desliga) a classe "active" no botão de hamburguer
        toggler.classList.toggle('active');
    });

    // Encontra todos os links de navegação dentro do menu
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    // Para cada link encontrado...
    navLinks.forEach(link => {
        // Adiciona um evento de clique a cada link
        link.addEventListener('click', () => {
            // Se o menu estiver aberto (visível)...
            if (navbarCollapse.classList.contains('show')) {
                // Remove a classe "active" do botão de hamburguer (volta ao ícone normal)
                toggler.classList.remove('active');
                // Fecha o menu (recolhe)
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Funcionalidade de filtro
    let filterButtons = document.querySelectorAll('.filter-btn');
    //cria uma variável que vai selecionar os cards com a classe .cards-work
    let cards = document.querySelectorAll('.cards-work');
    //Evento de clique para cada botão e pega os atributos do data-filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            let filter = button.getAttribute('data-filter');
            //Para cada botão que tiver o seu filtro selecionado, é mostrado. Caso seja selecionado All, a tela fica estática (nao existem filtros com esse nome, logo todos aparecem)
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            //Garante que o filtro seja limpo antes de aplicar o próximo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function sendEmail() {
    var email = document.getElementById('email').value;
    
    // Expressão regular para validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica se o email preenchido é válido
    if (emailRegex.test(email)) {
        // Cria o link mailto com o endereço de email preenchido
        var mailtoLink = 'mailto:gersondouglas2011@gmail.com?subject=Contato&body=Olá, Gerson Lima%0D%0A%0D%0ATenho interesse no seu trabalho gostaria de te propor o seguinte:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A';
        
        // Adiciona o email do cliente ao corpo do email (opcional)
        mailtoLink += 'At.te, %0D%0A%0D%0A' + email + '%0D%0A%0D%0A';
        
        // Abre o cliente de email padrão com o link mailto
        window.open(mailtoLink);
    } 
     // Verifica se o campo de email está vazio
     if (email.trim() === '') {
        alert('Por favor, digite seu email.');
        return; // Retorna para interromper a execução da função
        
    } else {
        alert('Por favor, digite um email válido.');
    }
}
