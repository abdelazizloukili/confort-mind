document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navbarNav = document.getElementById('navbarNav');

    menuButton.addEventListener('click', () => {
        navbarNav.classList.toggle('show');
    });

    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const ariaExpanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', !ariaExpanded);
            content.style.display = ariaExpanded ? 'none' : 'block';
        });
    });
});
