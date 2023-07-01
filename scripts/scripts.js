// body fade-in on load
document.body.classList.add('fade-out');
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// navigation triggers
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// flickity carousels
var flkty = new Flickity('.gallery-carousel', {
    wrapAround: true,
    prevNextButtons: false,
    pageDots: true,
    accessibility: true
});

var flkty = new Flickity('.animals-carousel', {
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    accessibility: false
});

var flkty = new Flickity('.environments-carousel', {
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    accessibility: false
});

var flkty = new Flickity('.eco-domes-carousel', {
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    accessibility: false
});
