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
// Мобильное меню
document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    const icon = this.querySelector('i');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.hamburger i').classList.remove('fa-times');
        document.querySelector('.hamburger i').classList.add('fa-bars');
    });
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Эффект для шапки при прокрутке
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Подсветка активного раздела в навигации
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Простая анимация появления элементов при прокрутке
function checkVisibility() {
    const elements = document.querySelectorAll('.feature-card, .gallery-item, .review-card, .requirements-column');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Анимация чисел в статистике
function animateStats() {
    const stats = document.querySelectorAll('.stat');
    
    stats.forEach((stat, index) => {
        const numberElement = stat.querySelector('.stat-number');
        const labelElement = stat.querySelector('.stat-label');
        
        // Задержка для каждого элемента
        setTimeout(() => {
            // Добавляем класс для анимации полосочки
            stat.classList.add('animating');
            
            // Анимация числа через небольшую задержку
            setTimeout(() => {
                numberElement.classList.add('rising');
                numberElement.classList.add('animated');
            }, 300);
            
            // Анимация подписи
            setTimeout(() => {
                labelElement.classList.add('visible');
            }, 600);
            
            // Убираем класс анимации полосочки после завершения
            setTimeout(() => {
                stat.classList.remove('animating');
            }, 1500);
            
        }, index * 500); // Задержка между анимациями элементов
    });
}

// Функция для проверки видимости статистики
function checkStatsVisibility() {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Если статистика видна и еще не анимирована
    if (sectionTop < windowHeight - 100 && !statsSection.classList.contains('animated')) {
        statsSection.classList.add('animated');
        animateStats();
    }
}

// Обновляем инициализацию при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем видимость элементов
    checkVisibility();
    
    // Проверяем видимость статистики
    checkStatsVisibility();
    
    // Форма подписки
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                alert(`Спасибо за подписку! На адрес ${email} будут приходить новости об игре.`);
                emailInput.value = '';
            }
        });
    }
});

// Слушаем событие прокрутки
window.addEventListener('scroll', function() {
    checkVisibility();
    checkStatsVisibility();
});

// Также запускаем проверку после небольшой задержки
setTimeout(() => {
    checkVisibility();
    checkStatsVisibility();
}, 100);

// Кнопка "Наверх"
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Оптимизация загрузки гифки
document.addEventListener('DOMContentLoaded', function() {
    const gifImg = document.querySelector('.hero-gif-bg img');
    
    if (gifImg) {
        gifImg.classList.add('loading');
        
        // Ждем загрузки гифки
        gifImg.onload = function() {
            gifImg.classList.remove('loading');
            gifImg.classList.add('loaded');
        };
        
        // На случай если гифка не загрузится
        gifImg.onerror = function() {
            gifImg.classList.remove('loading');
            console.error('Не удалось загрузить гифку');
        };
        
        // Принудительно запускаем загрузку
        gifImg.src = gifImg.src;
    }
});