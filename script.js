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
        nav.style.backgroundColor = 'rgba(0, 51, 102, 0.95)'; // Koyu mavi, hafif transparan
    } else {
        nav.style.backgroundColor = 'var(--primary-blue)'; // Normal koyu mavi
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