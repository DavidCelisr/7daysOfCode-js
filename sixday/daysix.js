//lista supermercado, Remoción de arrays.

//variables
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let listaFinal = [frutas, lacteos, congelados, dulces];

alert("!Bienvenido a tu lista de compras!");

//lamo a la funcion 
creaLista();


//funcion para crear lista y opciones
function creaLista () {
    let opcionUs = prompt('Empecemos a crear tu lista, elije la categoria del producto que deseas agregar: \n 1. Frutas \n 2. Lacteos \n 3. Congelados \n 4. Dulces');
    if (opcionUs === '1') {
        let fruta = prompt('Ingresa el nombre del producto');  
        frutas.push(fruta);
        alert(`Agregaste ${fruta} en la categoria de Frutas`);
        console.log(frutas);
        return salirOpciones();
    }
    else if (opcionUs === '2') {
        let lacteo = prompt('Ingresa el nombre del producto');
        lacteos.push(lacteo);
        alert(`Agregaste ${lacteo} en la categoria de Lacteos`);
        console.log(lacteos);
        return salirOpciones();

    }
    else if (opcionUs === '3') {
        let congelado = prompt('Ingresa el nombre del producto');
        congelados.push(congelado);
        alert(`Agregaste ${congelado} en la categoria de Congelados`);
        console.log(congelados);
        return salirOpciones();
    }
    else if (opcionUs === '4') {
        let dulce = prompt('Ingresa el nombre del producto');
        dulces.push(dulce);
        alert(`Agregaste ${dulce} en la categoria de Dulces`);
        console.log(dulces);
        return salirOpciones();
    }
    else {
        alert('Opcion no valida, intenta de nuevo');
        return creaLista();
    }
}

//funcion para preguntar y salir programa y permitir eliminar algun elemento
function salirOpciones() {
    let salir = prompt('¿Deseas agregar otro producto a tu lista? \n 1. Si \n 2. No \n ¿Deseas Eliminar algun producto? oprime 3');
    if (salir === '1') {
        creaLista();
    }
    else if (salir === '2') {
        alert(`Tu lista de mercado es: \n${listaFinal.flat().join("\n")}`);
    }
    else if (salir === '3') {
        alert(`Tu lista de mercado es: \n${listaFinal.flat().join("\n")}`);
        let eliminarProducto = prompt('Que producto deseas eliminar?').trim().toLowerCase();
        
        if (eliminarProducto) {
            let eliminado = false;

            listaFinal = listaFinal.map(sublista => {
                let nuevaSublista = sublista.filter(item => item.toLowerCase() !== eliminarProducto);
                if (nuevaSublista.length !== sublista.length) eliminado = true;
                return nuevaSublista;
            });

            if (eliminado) {
                alert(`${eliminarProducto} ha sido eliminado de la lista.`);
            } else {
                alert(`El producto "${eliminarProducto}" no se encontró en la lista.`);
            }

            return salirOpciones();
        } else {
            alert("No ingresaste ningún producto.");
            return salirOpciones();
        }
    } else {
        alert('Opción no válida, intenta de nuevo.');
        return salirOpciones();
    }
}



 