document.addEventListener('DOMContentLoaded', () => {
    const cinta = document.getElementById('cinta');
    let isDragging = false;
    let startX;
    let offset = 0;

    cinta.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - offset;
        cinta.style.transition = 'none';
        document.body.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const currentX = e.clientX;
        offset = currentX - startX;

        // Ajustamos el movimiento de la cinta en función del arrastre
        if (Math.abs(offset) > 0) {
            cinta.style.transform = `translateX(${offset}px)`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        cinta.style.transition = 'transform 0.3s ease';

        // Cambiar de página según la dirección del desplazamiento
        if (offset > 150) {
            window.location.href = 'page3.html';  // Cambia a la siguiente página
        } else if (offset < -150) {
            window.location.href = 'page1.html';  // Regresa a la página anterior
        } else {
            cinta.style.transform = 'translateX(0)';
        }

        document.body.style.cursor = 'default';
    });
});
