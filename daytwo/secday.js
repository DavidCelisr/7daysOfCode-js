let nombreUsuario = prompt("¿Cuál es tu nombre?");
    console.log(nombreUsuario);

let edadUsuario = prompt("¿Cuántos años tienes?");
    console.log(edadUsuario);

let lengProgram = prompt("¿Qué lenguaje de programación estás estudiando?");
    console.log(lengProgram);

let answerUS = 1


alert(`Hola ${nombreUsuario}! te confirmo tienes ${edadUsuario} años y ya estas aprendiendo ${lengProgram}! Es muy interesante`);

let nuevaPregUs = prompt(`¿te gusta estudiar ${lengProgram}?  responde 1 para si y 2 para no`);
    console.log(nuevaPregUs);

//si responde si
if(nuevaPregUs === answerUS) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} 
else {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}

    


 