class DatosDelDisco {
    constructor(nombre, autor, codigo) {

        this.nombre = nombre,
            this.autor = autor,
            this.codigo = codigo;
    }

    pistas = [];


}

// Array donde se guardarán los discos a medida que son cargados
let discos = [];

// 1) SOLICITAR NOMBRE DEL DISCO
// 2) PEDIR AUTOR DEL DISCO 

const pedirDato = (mensaje) => {
    // La variable valor se reutilizará en cada dato string solicitado en el programa
    let valor = prompt(mensaje);

    // Si no se ingresa nada al solicitar el dato se disparará un alert para solicitar el dato de nuevo
    if (valor == "") {
        mensajeDeAlerta = alert("No puede dejar este campo en blanco. Por favor intente de nuevo.");

        // Se le pedirá al usuario que ingese de nuevo el dato
        return pedirDato(mensaje);
    }
    return valor;
}

// 3) PEDIR CÓDIGO DEL DISCO

// Array donde se guardarán los códigos de los discos para después hacer la verificación de código repetido

let listaDeCodigos = [];

const cargarCodigoDelDisco = () => {
    let codigo = parseInt(prompt("Ingresa el código del disco"));

    // Validación para que el código ingresado esté en rango ni sea otro dato que no sea un número
    if (codigo <= 0 || codigo > 999 || isNaN(codigo)) {
        mensaje = alert("El código no puede ser menor a 1 ni mayor a 999. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarCodigoDelDisco();

        // sino, cargar el dato del código al array 
    } else {
        listaDeCodigos.push(codigo);
        console.log(listaDeCodigos);
    }

    return codigo;
}

// 4) PEDIR EL NOMBRE DE LA PISTA

// Array donde se guardarán todas las pistas de cada disco

let todasLasPistas = [];

const pedirPista = () => {

    let nombrePista = "";
    let duracionPista;

    do {
        nombrePista = pedirDato("Ingrese el nombre de la pista");

        // 5) PEDIR DURACIÓN DE LA PISTA

        duracionPista = cargarDuracionDelDisco();

        todasLasPistas.push({
            nombre: nombrePista,
            duracion: duracionPista

        });

        // 6) PREGUNTAR AL USUARIO SI DESEA CARGAR OTRA PISTA

    } while (confirm("Desea cargar otra pista?"))

}

// Array donde se guardarán las duraciones de cada pista
let listaDeDuracionDePistas = [];

const cargarDuracionDelDisco = () => {
    let segundos = parseInt(prompt("Ingrese la duración de la pista medida en segundos"));

    // Validación de la duración de la pista

    if (segundos < 0 || segundos > 7200 || isNaN(segundos)) {

        mensaje = alert("La cantidad de segundos no puede ser menor a 0 ni mayor a 7200. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarDuracionDelDisco();
    }

    return segundos;
}


// Función para cargar los datos del disco al darle click al botón Cargar
function cargarDatosDelDisco() {

    nombre = pedirDato("Ingrese el nombre del disco");
    autor = pedirDato("Ingrese el autor del disco");
    codigo = cargarCodigoDelDisco();
    pedirPista()

}


function mostrarDiscosCargados() {

    // Usar map

    let disco = new DatosDelDisco(nombre, autor, codigo);
    disco.pistas = todasLasPistas;

    html = `<ul>
    <li>${disco.nombre}</li>
    <li>${disco.autor}</li>
    <li>${disco.codigo}</li>
    <ul> ${disco.pistas.map(pista => { 
        return `<li style="color:red">${pista.nombre} ${pista.duracion}</li>` 
    })} 
    
    </ul>
   </ul>`;

    document.getElementById("coleccion").innerHTML = html;
}

//............................................

// PASOS A SEGUIR LUEGO DE CARGAR EL PRIMER DISCO:
// PREGUNTAR AL USUARIO SI QUIERE CARGAR OTRO
// SI ES ASÍ, VERIFICAR AL CARGAR EL CÓDIGO SI ÉSTE YA ESTÁ REPETIDO

// Verificar si el código ingresado está repetido: cómo?
//Opción 1: Comparar el array listaDeCodigos con una variable que verifique en un ciclo si el código está repetido o no

/*
for (let i = 0; i < listaDeCodigos.length; i++) {

    const codigos = listaDeCodigos[i];
    console.log(codigos);
}*/

/* USAR MÁS TARDE

const verificarCodigoUnico = (verificarCodigo) => {
    verificarCodigo = codigoDeldisco();

    if (verificarCodigo === codigoDeldisco) {
        alert("Código ya existente.");
    }
}*

//verificarCodigoUnico();*/