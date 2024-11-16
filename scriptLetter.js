// Texto a animar
const text = "NUESTRA BODA";
const titleElement = document.getElementById("wedding-title");

// Función para animar las letras
function animateLetters(text) {
    text.split("").forEach((char, index) => {
        // Crear un span para cada letra o espacio
        const span = document.createElement("span");
        span.textContent = char; // Asignar el carácter (letra o espacio)
        span.classList.add("letter");

        // Si es un espacio, agrega un margen para separar palabras
        if (char === " ") {
            span.style.display = "inline-block";
            span.style.width = "10px"; // Ancho del espacio
        }

        // Insertar la letra o espacio en el contenedor
        titleElement.appendChild(span);

        // Agregar animación con un retraso
        setTimeout(() => {
            span.classList.add("show");
        }, index * 150); // Retraso de 150ms entre cada carácter
    });
}

// Llamar a la función para iniciar la animación
animateLetters(text);
