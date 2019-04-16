const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-angle-up')
burger.addEventListener('click', () => {
    nav.classList.toggle('off')
    open.classList.toggle('off')
    close.classList.toggle('off')
})

