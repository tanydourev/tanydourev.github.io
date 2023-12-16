// body fade-in on load
document.body.classList.add('fade-out');
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// open navigation
function openNav() {
    document.getElementById("nav-responsive").style.display = "block";
    document.getElementById("open-button").style.display = "none";
    document.getElementById("close-button").style.display = "block";
}

// close navigation
function closeNav() {
    document.getElementById("nav-responsive").style.display = "none";
    document.getElementById("open-button").style.display = "block";
    document.getElementById("close-button").style.display = "none";
}
