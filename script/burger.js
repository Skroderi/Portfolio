const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const li = document.getElementById("parent-list")

menu.addEventListener('click', () => {
    menu.classList.toggle('on')
})


li.addEventListener('click', () => {
    menu.classList.toggle('on')
})