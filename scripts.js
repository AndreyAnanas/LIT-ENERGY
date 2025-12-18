// Открытие/закрытие мобильного меню
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.hamburger i').classList.remove('fa-times');
        document.querySelector('.hamburger i').classList.add('fa-bars');
    });
});