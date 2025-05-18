// RESPONSIVE NAVIGATION TRIGGERS
function openNav() {
    document.getElementById("responsive-navigation").style.width = "100%";
    document.getElementById("close-button").style.display = "block";
}

function closeNav() {
    document.getElementById("responsive-navigation").style.width = "0";
}

// -------------------------------------------------------------------------------- //

// FADE IN PAGE
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});
