const scrollbar = document.querySelector('.scroll-content');
const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', e => {
    console.log(window.screenTop);
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});