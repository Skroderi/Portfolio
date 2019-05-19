//Hamburger
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const li = document.getElementById("parent-list")
const ul = document.querySelector('ul')

menu.addEventListener('click', () => {
    menu.classList.toggle('on')
    ul.classList.toggle('show')
})


li.addEventListener('click', () => {
    menu.classList.toggle('on')
    ul.classList.toggle('show')
})


//typing
let i = -4;
const text = "{ hello }.";
const speed = 160;
const spnCursor = document.querySelector('.cursor');
window.onload = typing = () => {
    if (i < text.length) {
        document.querySelector(".text").textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 450);


//effect on projects
ScrollReveal().reveal('.project', {
    delay: 200
});
// btn in first view 
$('.firstBtn').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 700)
})
// smooth scroll
$('nav ul li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})

//button, after click go to top
$('.toTop').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.wrapper').offset().top
    }, 700)
})

window.onscroll = function () {
    scrollFunction()
};

const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.toTop').style.right = "10px";
    } else {
        document.querySelector('.toTop').style.right = "-50px";
    }
}