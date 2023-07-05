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
