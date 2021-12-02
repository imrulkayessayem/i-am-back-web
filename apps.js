let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainBehind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let hi = document.getElementById('hi');
let mountainFront = document.getElementById('mountain-front');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    text.style.marginLeft = value * 2 + 'px';
    text.style.marginBottom = value * 1.3 + 'px';
    hi.style.marginBottom = value * 1.3 + 'px';
    mountainBehind.style.left = value * 0.30 + 'px';
})