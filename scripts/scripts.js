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

// gallery carousel
$(document).ready() {
    $('.gallery-carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true,
        accessibility: true
    });
});

// rw posts carousel
$(document).ready() {
    $('.rw-posts-carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: false
    });
});

// animals carousel
$(document).ready() {
    $('.animals-carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true
    });
});

// environments carousel
$(document).ready() {
    $('.environments-carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true
    });
});

// eco domes carousel
$(document).ready() {
    $('.eco-domes-carousel').flickity({
        wrapAround: true,
        prevNextButtons: true,
        pageDots: true
    });
});
