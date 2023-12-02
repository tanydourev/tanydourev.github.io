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

// about section buttons
function showAbout() {
    document.getElementById("showAbout").style.display = "block";
    document.getElementById("showConnect").style.display = "none";
}

function showConnect() {
    document.getElementById("showAbout").style.display = "none";
    document.getElementById("showConnect").style.display = "block";
}

// fade elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
