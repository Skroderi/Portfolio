let i = -4;
const text = "hello.";
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