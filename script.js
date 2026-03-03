// basic interactivity for the site

// toggle mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// simple form validation and submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // read required fields
        const name = this.querySelector('#fullname');
        const email = this.querySelector('#email');
        const subject = this.querySelector('#subject');
        const message = this.querySelector('#message');

        if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
            alert('Please fill in all required fields.');
            return;
        }
        // here you would normally send the data via fetch/AJAX
        alert('Thank you, ' + name.value.trim() + '! Your message has been sent.');
        this.reset();
    });
}

// highlight active link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// scroll animation using IntersectionObserver
const observerOptions = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// initialize Swiper slider when library is available
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
