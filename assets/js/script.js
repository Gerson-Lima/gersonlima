// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observe elements for scroll animations
    document.querySelectorAll('.card, .skill, h1, p, .footer, .email-container').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Observe project cards with staggered animation delay
    document.querySelectorAll('.cards-work').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    let toggler = document.querySelector('.navbar-toggler');
    let navbarCollapse = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', function() {
        toggler.classList.toggle('active');
    });

    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                toggler.classList.remove('active');
                navbarCollapse.classList.remove('show');
            }
        });
    });

    let filterButtons = document.querySelectorAll('.filter-btn');
    let cards = document.querySelectorAll('.cards-work');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            let filter = button.getAttribute('data-filter');
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

function sendEmail() {
    var email = document.getElementById('email').value;
    
    if (email.trim() === '') {
        alert('Por favor, digite seu email.');
        return;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Por favor, digite um email válido.');
        return;
    }
    
    var mailtoLink = 'mailto:gersondouglas2011@gmail.com?subject=Contato site Gerson Lima&body=Olá, Gerson Lima%0D%0A%0D%0ATenho interesse no seu trabalho gostaria de te propor o seguinte:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A';
    mailtoLink += 'At.te, %0D%0A%0D%0A' + email + '%0D%0A%0D%0A';
    
    window.open(mailtoLink);
    document.getElementById('email').value = '';
}
