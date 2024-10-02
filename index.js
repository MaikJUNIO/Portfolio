// Seleccionamos el ícono del menú y la barra de navegación
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Selector corregido para seleccionar correctamente el enlace activo
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Añadimos un listener de clic al ícono para alternar la clase "show"
menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('show');  // Alternar la visibilidad del menú
});
