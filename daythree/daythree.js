//destinos posibles

// Variables
let aprendizaje = []; 
let backend = 1;
let frontend = 2;
let ninguno = 3;

// Función para definir pregunta inicial
function mensajePregunta() {
    let pregunta = parseInt(prompt("¿Ya perteneces al área del Back-End o Front-End? Si es así: escribe 1 para Back-End y 2 para Front-End. De lo contrario, escribe 3")); 
    
    while (true) {
        if ([1, 2, 3].includes(pregunta)) {
            let seleccion = (pregunta === 1) ? "Back-End" : (pregunta === 2) ? "Front-End" : "No perteneces a ningún área. ¿Te gustaría desarrollarte como Fullstack?";
            alert(`Seleccionaste: ${seleccion}`);
            return pregunta;
        } else {
            alert("Por favor ingrese una opción válida");
            pregunta = parseInt(prompt("Escribe 1 para Back-End, 2 para Front-End o 3 si no perteneces a ninguno."));
        }
    }
}

// Función si no tiene área asignada
function opcionTres() {
    let preguntaDos = parseInt(prompt("Elige 1 para sí y 2 para No"));
    
    while (true) {
        if (preguntaDos ===1) {
            let seleccionDos = (preguntaDos === 1) ? "Que te interesa desarrollarte como Fullstack, ¡empecemos!" : "No tengo interés en el desarrollo Fullstack";
            alert(`Seleccionaste: ${seleccionDos}`);
            return; 
        } else if (preguntaDos === 2) { 
            let seleccionapren = prompt("¿Qué tecnología o especialización deseas aprender?");
            aprendizaje.push(seleccionapren);
            alert(`Seleccionaste: ${aprendizaje.join(", ")}`);
            console.log("Tecnologías seleccionadas:", aprendizaje);
            return;  
        } else {
            alert("Por favor ingrese una opción válida");
            preguntaDos = parseInt(prompt("Elige 1 para sí y 2 para No"));
        }
    }
}

// Función para elegir especialidad si ya pertenece a un área
function especialidad(espec) {
    if (espec === 1 || espec === 2) {
        let herramienta;
        
        while (true) {
            if (espec === 1) {
                herramienta = parseInt(prompt("¡Excelente! ¿Qué herramienta te gustaría aprender? Escribe 1 para C# o 2 para Java"));
                if (herramienta === 1 || herramienta === 2) {
                    let herramientaNombre = (herramienta === 1) ? "C#" : "Java";
                    alert(`¡Genial! Estás interesado en aprender ${herramientaNombre}, vamos a registrarte en esta especialidad"`);
                    return herramientaNombre;
                }
            } else if (espec === 2) {
                herramienta = parseInt(prompt("¡Genial! ¿Qué framework de Front-end prefieres? Escribe 1 para React o 2 para Vue"));
                if (herramienta === 1 || herramienta === 2) {
                    let herramientaNombre = (herramienta === 1) ? "React" : "Vue";
                    alert(`¡Genial! Estás interesado en aprender ${herramientaNombre}, vamos a registrarte en esta especialidad"`);
                    return herramientaNombre;
                }
            }
            alert("Por favor ingrese una opción válida");
        }
    }
}

// Mensaje de bienvenida
alert("¡Bienvenido a la plataforma de aprendizaje del área de desarrollo Back-End y Front-End de Alura!");

// Llamada a la función de pregunta de entrada
let respuesta = mensajePregunta();
console.log("Respuesta inicial:", respuesta);

// Si el usuario eligió 3, llamamos a opcionTres()
if (respuesta === 3) {
    respuesta = opcionTres();
}

// Llamada a la función especialidad si el usuario pertenece a un área
let herramienta = especialidad(respuesta);
console.log("Herramienta seleccionada:", herramienta);