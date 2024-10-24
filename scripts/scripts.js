// page fade-in
document.body.classList.add('fade-out');

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// navigation triggers
function openNav() {
    document.getElementById("responsive-navigation").style.width = "100%";
    document.getElementById("close-button").style.display = "block";
}

function closeNav() {
    document.getElementById("responsive-navigation").style.width = "0";
}

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
