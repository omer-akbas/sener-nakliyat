// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobil menü toggle fonksiyonu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Menü linklerine tıklandığında menüyü kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// İstatistik sayaç animasyonu
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 saniye
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCount = () => {
            if(current < target) {
                current += increment;
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
}

// Sayfa yüklendiğinde ve scroll edildiğinde istatistikleri kontrol et
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    let animated = false;
    
    const checkScroll = () => {
        if(!animated) {
            const rect = statsSection.getBoundingClientRect();
            if(rect.top <= window.innerHeight && rect.bottom >= 0) {
                animateStats();
                animated = true;
            }
        }
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // İlk yüklemede kontrol et
}); 