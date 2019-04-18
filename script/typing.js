let i = -5;
const text = "hello friend.";
const speed = 350;
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
setInterval(cursorAnimation, 350);