// adivina el numero, empecemos!

function adivinarNumero() {
    let numeroAdivinar = Math.floor(Math.random() * 11); // Número entre 0 y 10
    let intentos = 3; // Máximo de intentos

    while (intentos > 0) {
        let numeroUsuario = parseInt(prompt(`Adivina un número entre 0 y 10. Te quedan ${intentos} intentos:`));

        if (numeroUsuario === numeroAdivinar) {
            alert('¡Acertaste, felicidades!');
            return; // Sale de la función si acierta
        } else {
            alert('No acertaste, intenta de nuevo');
        }

        intentos--; // Resta un intento
    }

    // Si se acabaron los intentos, mostrar el número secreto
    alert(`Lo siento, se acabaron los intentos. El número secreto era ${numeroAdivinar}.`);
}

adivinarNumero();  // Llamamos la función para jugar