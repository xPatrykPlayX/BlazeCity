document.addEventListener('DOMContentLoaded', () => {

    // --- Efekt przyklejonej nawigacji (zmiana tła przy scrollowaniu) ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Animacje wchodzenia elementów przy scrollowaniu (Fade-in) ---
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observerOptions = { root: null, threshold: 0.2, rootMargin: "0px" };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeInElements.forEach(el => { observer.observe(el); });

    // --- Kopiowanie IP serwera do schowka ---
    const copyIcon = document.querySelector('.copy-icon');
    const serverIp = document.querySelector('.server-info span');
    
    if(copyIcon && serverIp) {
        copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(serverIp.textContent).then(() => {
                copyIcon.classList.remove('fa-copy');
                copyIcon.classList.add('fa-check');
                copyIcon.style.color = '#4CAF50';
                setTimeout(() => {
                    copyIcon.classList.remove('fa-check');
                    copyIcon.classList.add('fa-copy');
                    copyIcon.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Nie udało się skopiować tekstu: ', err);
            });
        });
    }
    
    // --- Inicjalizacja Fancybox (opcjonalnie, dla zaawansowanych ustawień) ---
    // Fancybox.bind("[data-fancybox]", {
    //   // Twoje niestandardowe opcje tutaj
    // });
    
    // Stary kod slidera został usunięty, ponieważ galeria używa teraz Fancybox.

});