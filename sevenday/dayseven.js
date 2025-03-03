//calculadora - funciones en JS, con funciones solicitadas
alert('Bienvenido a la calculadora');

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        let opcion = prompt("¿Qué operación deseas realizar?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");

        if (opcion === '5') {
            alert("Hasta la próxima");
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));

        let resultado;

        switch (opcion) {
            case '1':
                resultado = suma(num1, num2);
                break;
            case '2':
                resultado = resta(num1, num2);
                break;
            case '3':
                resultado = multiplicacion(num1, num2);
                break;
            case '4':
                resultado = division(num1, num2);
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
                continue; // Evita imprimir resultado si la opción es inválida
        }

        alert(`El resultado es: ${resultado}`);
    }
}

// Llamar a la calculadora
calculadora();
   