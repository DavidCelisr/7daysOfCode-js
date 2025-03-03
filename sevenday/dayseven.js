//calculadora - funciones en JS
alert('Bienvenido a la calculadora');

// llamada a la funcion 
operacion();


//funcion para realizar operaciones
function operacion() {
    let quesUser = prompt("¿Qué operación deseas realizar? \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División \n 5. Salir");
    console.log(quesUser);
    
    //se verifica si us quiere salir antes de pedir numeros
    if (quesUser === '5') {
        alert('Gracias por usar la calculadora');
        return
    }
    
    let = num1 = parseInt(prompt("Ingresa el primer valor"));
    let = num2 = parseInt(prompt("Ingresa el segundo valor"));

    if (quesUser === '1') {
        let suma = num1 + num2;
        alert(`El resultado de la suma es: ${suma}`);
        console.log(suma);
        return operacion();
    }
    else if (quesUser === '2') {
        let resta = num1 - num2;
        alert(`El resultado de la resta es: ${resta}`);
        console.log(resta);
        return operacion();
    }
    else if (quesUser === '3') {
        let multi = num1 * num2;
        alert(`El resultado de la multiplicación es: ${multi}`);
        console.log(multi);
        return operacion();
    }
    else if (quesUser === '4') {
        let div = num1 / num2;
        alert(`El resultado de la división es: ${div}`);
        console.log(div);
        return operacion();
    }
    else {
        alert('Opcion no valida, intenta de nuevo');
    }
   return operacion(); // Volver a llamar a la función si no se eligió salir
}
   