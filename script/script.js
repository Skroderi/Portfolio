//effect on projects
ScrollReveal().reveal('.project', { delay: 200 });
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
