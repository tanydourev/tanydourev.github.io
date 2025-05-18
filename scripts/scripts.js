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
// window.addEventListener('DOMContentLoaded', () => {
//     document.body.classList.remove('fade-out');
// });

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-content');
    const items = container.querySelectorAll('#section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: container,
        threshold: 0.1
    });

    items.forEach(item => observer.observe(item));
});




