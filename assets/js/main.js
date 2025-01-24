
const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
         // Abrir el modal
    document.getElementById('openModal').addEventListener('click', function() {
        document.getElementById('inscriptionModal').classList.remove('hidden');
    });

    // Cerrar el modal
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('inscriptionModal').classList.add('hidden');
    });

    // Enviar datos por WhatsApp
    document.getElementById('sendWhatsApp').addEventListener('click', function() {
        let nombre = document.getElementById('nombre').value;
        let edad = document.getElementById('edad').value;
        let documento = document.getElementById('documento').value;
        let deporte = document.getElementById('deporte').value;

        if (nombre && edad && documento && deporte) {
            let mensaje = `Hola, quiero inscribirme en ${deporte}. Mis datos son:\n\n` +
                          `Nombre: ${nombre}\n` +
                          `Edad: ${edad}\n` +
                          `Documento: ${documento}\n` +
                          `Deporte: ${deporte}`;

            let numeroWhatsApp = '573001234567';  // Reemplaza con tu número de WhatsApp en formato internacional
            let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');

            document.getElementById('inscriptionModal').classList.add('hidden');
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    