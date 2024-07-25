$(document).ready(function(){
    var typed=new Typed(".text",{
        strings:["Frontend Developer","Web Developer","ReactJs Developer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })
})
/* navbar */

let menuIcon =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}


/* let sections =document.querySelectorAll("section");
let navbar=document.querySelectorAll("header nav a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHight;
        let id=sec.getAttribute("id");

        if (top >= offset && top < offset + height){
            navbar.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').className.padEnd('active')
            });
        };
    });
}; 
 */
let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('fa-x')
navbar.classList.remove('active')

/* scroll reveal */
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content,.heading', {origin:'top' });
 ScrollReveal().reveal('.home-img,.project-box ,.contact form', {origin:'bottom' });
 ScrollReveal().reveal('.home-content h1,.about-img,.container', {origin:'left' });
 ScrollReveal().reveal('.home-content p,.about-content', {origin:'right' });