"use strict"

class DatosDelDisco {
    constructor(nombre, autor, codigo) {

        this.nombre = nombre,
            this.autor = autor,
            this.codigo = codigo;
    }

    pistas = [];

}

// VARIABLES GLOBALES

let mensajeDeAlerta = "";

// 1) SOLICITAR NOMBRE DEL DISCO
// 2) PEDIR AUTOR DEL DISCO 

const pedirDato = (mensaje) => {
    // La variable valor se reutilizará en cada dato string solicitado en el programa
    let valor = prompt(mensaje);

    // Si no se ingresa nada al solicitar el dato se disparará un alert para solicitarlo de nuevo
    if (valor == "" || !isNaN(valor)) {
        mensajeDeAlerta = alert("No puede dejar este campo en blanco ni el dato ser un número. Por favor intente de nuevo.");

        // Se le pedirá al usuario que ingese de nuevo el dato
        return pedirDato(mensaje);

    } else {
        return valor;
    }

}

// 3) PEDIR CÓDIGO DEL DISCO

// Array donde se guardarán los códigos de los discos para después hacer la verificación de código repetido

let listaDeCodigos = [];

const cargarCodigoDelDisco = () => {
    codigo = parseInt(prompt("Ingresa el código del disco"));

    // Validación para que el código ingresado esté en rango ni sea otro dato que no sea un número
    if (codigo <= 0 || codigo > 999 || isNaN(codigo)) {
        mensajeDeAlerta = alert("El código no puede ser menor a 1 ni mayor a 999. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarCodigoDelDisco();

        // sino, cargar el dato del código al array }

    } else {
        listaDeCodigos.push(codigo);
        console.log(listaDeCodigos);
    }

    return codigo;
}

// VERIFICAR AL CARGAR EL CÓDIGO SI ÉSTE YA ESTÁ REPETIDO

/*
const verificarCodigoUnico = (codigoUnico, listaDeCodigos) => {

    const codigoYaExistente = listaDeCodigos.find((codigoUnico) => codigoUnico == codigo);
    mensaje = alert("Código ya existente. Por favor intente de nuevo");
    return cargarCodigoDelDisco();
}
*/

// 4) PEDIR EL NOMBRE DE LA PISTA

// Array donde se guardarán todas las pistas de cada disco

let todasLasPistas = [];

const pedirPista = () => {

    // Declaro las variables donde se guardarán los datos solicitados

    let nombrePista = "";
    let duracionPista;

    do {

        nombrePista = pedirDato("Ingrese el nombre de la pista");

        // Validación del dato ingresado 

        if (nombrePista == "") {

            mensajeDeAlerta = alert("Este campo no puede quedar vacío. Por favor ingrese un dato válido");

            return pedirPista();

        } else {

            // 5) PEDIR DURACIÓN DE LA PISTA

            duracionPista = cargarDuracionDelDisco();

            // En el array vacío todasLasPistas se guardarán el nombre y la duración de cada pista

            todasLasPistas.push({
                nombre: nombrePista,
                duracion: duracionPista

            })

        }

    }
    // 6) PREGUNTAR AL USUARIO SI DESEA CARGAR OTRA PISTA

    while (confirm("Desea cargar otra pista?"))
    return todasLasPistas;
}


const cargarDuracionDelDisco = () => {
    let segundos = parseInt(prompt("Ingrese la duración de la pista medida en segundos"));

    // Validación de la duración de la pista

    if (segundos <= 0 || segundos > 7200 || isNaN(segundos)) {

        mensajeDeAlerta = alert("La cantidad de segundos no puede ser menor o igual a 0 ni mayor a 7200. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarDuracionDelDisco();
    }

    return segundos;
}

// 7) PINTAR DE ROJO LAS PISTAS MAYORES A 180 EN LA FUNCIÓN MOSTRAR DISCOS


// Array donde se guardarán los discos a medida que son cargados
let discos = [];

// Variables a llenar al cargar los datos

let nombre = "";
let autor = "";
let codigo;
let pistas;

// Función para cargar los datos del disco al darle click al botón Cargar

function cargarDatosDelDisco() {

    do {

        nombre = pedirDato("Ingrese el nombre del disco");
        autor = pedirDato("Ingrese el autor del disco");
        codigo = cargarCodigoDelDisco();
        pistas = pedirPista();

        discos.push({

            nombre: nombre,
            autor: autor,
            codigo: codigo,
            pista: pistas

        });
    }

    // Preguntar al usuario si desea cargar un nuevo disco

    while (confirm("Desea cargar otro disco?"))

}

/*
let codigoUnico = listaDeCodigos.find(codigo == codigo) {

    mensaje = alert("El código ingresado ya existe. Por favor intente de nuevo");

    return cargarCodigoDelDisco();
}*/


function mostrarDiscosCargados() {

    // Se creará uno objeto llamado disco

    //let disco = new DatosDelDisco(nombre, autor, codigo);

    // .pistas es el array definido dentro del objeto, por lo que se le agregarán datos al objeto disco cuya propiedad es pistas


    // Verificar la duración de las pistas y pintar de rojo las que sean mayores a 180

    //duracionesMayoresA180 = todasLasPistas.map(duracion )
    /*
    duracionesMayoresA180 = disco.pistas.map( duracionSegundos => {

        return duracionSegundos;
    });*/


    let html = "";

    discos.forEach(disco => {

        html += `<ul>
    <li>Nombre del disco: <strong> ${disco.nombre} </strong> </li>
    <li>Autor/ banda: <strong> ${disco.autor} </strong> </li>
    <li>Código único del disco: <strong> ${disco.codigo} </strong> </li>
    <div>
    <ul>Lista de pistas y duración: ${disco.pista.map(pistas => { 
        return `
        <li> <strong> ${pistas.nombre}</strong>: <span class= "highlight__red"> ${pistas.duracion} </span> segundos</li>` 
    })} 
    
    </ul>
    <div>
   </ul>`;

    })

    document.getElementById("coleccion").innerHTML = html;
}