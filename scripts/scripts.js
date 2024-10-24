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
