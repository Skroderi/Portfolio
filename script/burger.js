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