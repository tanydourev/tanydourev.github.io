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
const loader = document.getElementById("preloader");

const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 100);

  window.addEventListener('load', fadeOutEffect);
