$(document).ready(function() {


// ==========================================
// TYPED.JS - Role Animation
// ==========================================
var typed = new Typed(".role-title", {

    strings: [
        "PHP Developer",
        "Laravel Developer",
        "CodeIgniter Developer",
        "Backend / Full-Stack PHP Developer"
    ],

    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

    loop: true,

    showCursor: true,
    cursorChar: "",

    smartBackspace: true,
    fadeOut: false,

});


// ==========================================
// MOBILE MENU
// ==========================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');

};


// Close mobile menu on link click
document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', () => {

        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');

    });

});


// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {

            current = section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }

    });

});


// ==========================================
// STICKY HEADER
// ==========================================
let header = document.querySelector('header');

window.addEventListener('scroll', () => {

    header.classList.toggle(
        'sticky',
        window.scrollY > 100
    );

});


// ==========================================
// RESUME DOWNLOAD
// ==========================================
function downloadResume(e) {

    e.preventDefault();

    const link = document.createElement('a');

    link.href = './images/sankarresume_php_laravel_codeigniter.pdf';
    link.download = 'Sankaranarayanan_R_Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}


const downloadBtn1 =
    document.getElementById('downloadResume');

const downloadBtn2 =
    document.getElementById('downloadResume2');


if (downloadBtn1) {
    downloadBtn1.addEventListener(
        'click',
        downloadResume
    );
}

if (downloadBtn2) {
    downloadBtn2.addEventListener(
        'click',
        downloadResume
    );
}


// ==========================================
// SCROLL REVEAL
// ==========================================
ScrollReveal({

    reset: true,

    distance: '80px',

    duration: 2000,

    delay: 200,

    easing:
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

});


ScrollReveal().reveal(
    '.home-content, .heading',
    { origin: 'top' }
);


ScrollReveal().reveal(
    '.home-img, .project-card, .contact-form',
    { origin: 'bottom' }
);


ScrollReveal().reveal(
    '.about-content, .skill-category, .experience-card',
    { origin: 'left' }
);


ScrollReveal().reveal(
    '.about-img, .contact-info',
    { origin: 'right' }
);


ScrollReveal().reveal(
    '.stat-item',
    {
        origin: 'bottom',
        interval: 200,
        delay: 300
    }
);


ScrollReveal().reveal(
    '.project-features li',
    {
        origin: 'left',
        interval: 100,
        delay: 300
    }
);


// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        'click',
        function(e) {

            const href =
                this.getAttribute('href');

            if (href !== '#') {

                e.preventDefault();

                const target =
                    document.querySelector(href);

                if (target) {

                    const offset = 80;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        offset;

                    window.scrollTo({

                        top: targetPosition,

                        behavior: 'smooth'

                    });

                }

            }

        }
    );

});


console.log(
    '✅ Portfolio loaded successfully!'
);

});
