function toggleDescription() {
    const description = document.querySelector('.profile-info p');
    description.classList.toggle('expanded');
}

function scrollToSection(sectionId) {
    gsap.to(window, { duration: 1, scrollTo: `#${sectionId}` });
}

function toggleContact() {
    const contact = document.querySelector('.contact');
    contact.classList.toggle('visible');
}
// Asegurarse de que el botón flotante esté visible solo en dispositivos móviles
if (window.innerWidth <= 768) {
    floatButton.style.display = 'block';
} else {
    floatButton.style.display = 'none';
}

// Función para cargar y mostrar gráfico de habilidades
function loadSkillsChart() {
    const skillsChartCanvas = document.getElementById('skillsChart');
    const ctx = skillsChartCanvas.getContext('2d');

    // Datos de ejemplo para las habilidades (puedes personalizar estos valores)
    const skillsData = {
        labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
        datasets: [{
            data: [90, 85, 80, 75, 70], // Porcentajes de habilidades
            backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6'],
        }],
    };

    const skillsChart = new Chart(ctx, {
        type: 'doughnut', // Tipo de gráfico de habilidades
        data: skillsData,
    });
}

// Llamada a la función para cargar el gráfico de habilidades al cargar la página
loadSkillsChart();

// ... (código anterior) ...
// ... (código anterior) ...

// Mostrar u ocultar la barra de contacto al llegar al final de la página
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight - 10) {
        // Mostrar la barra de contacto al llegar al final de la página
        document.querySelector('.contact-bar').style.display = 'none';
        document.querySelector('.contact').classList.add('visible');
    } else {
        // Ocultar la barra de contacto al volver a subir
        document.querySelector('.contact-bar').style.display = 'block';
        document.querySelector('.contact').classList.remove('visible');
    }
});

// ... (código anterior) ...

function toggleContactMenu() {
    const contactMenu = document.querySelector('.contact-menu');
    contactMenu.style.display = (contactMenu.style.display === 'block') ? 'none' : 'block';
}

function openLink(url) {
    window.open(url, '_blank');
}
function toggleContactBubble() {
    const contactBubble = document.querySelector('.float-button');
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isAtBottom) {
        contactBubble.style.display = 'none';
    } else {
        contactBubble.style.display = 'block';
    }
}
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
}
