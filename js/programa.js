"use strict"

class Disco {
    constructor(nombre, autor, codigo, pistas) {

        this.nombre = nombre;
        this.autor = autor;
        this.codigo = codigo;
        this.pistas = pistas;
    }

    obtenerDuracion() {

        // Iterar en las pistas e ir incrementando el número

        let duracionTotal = 0;

        // Por cada pista en el objeto Disco.pistas

        for (const pista of this.pistas) {

            // añadir al contador la duración de cada pista

            duracionTotal += pista.duracion
        }

        return duracionTotal;
    }

    obtenerDuracionMasAlta() {

        let pistaMasAlta = 0;


        for (const pista of this.pistas) {

            if (pista.duracion > pistaMasAlta) {

                pistaMasAlta = pista.duracion;
            }
        }
        return pistaMasAlta;
    }

    obtenerPromedio() {

        // Media / total

        return this.obtenerDuracion() / this.pistas.length
    }
}

// VARIABLES GLOBALES

let mensajeDeAlerta = "";
let color;

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

        // sino, cargar el dato del código al array 

    } else {

        // VERIFICAR SI EL CÓDIGO YA FUE CARGADO ANTES

        const codigoUnico = listaDeCodigos.find((codigoUnico) => codigoUnico == codigo);

        while (codigoUnico) {

            mensajeDeAlerta = alert("Código ya existente. Por favor ingrese un dato válido");

            return cargarCodigoDelDisco();

        }

        listaDeCodigos.push(codigo);
        return codigo;
    }

}

// 4) PEDIR EL NOMBRE DE LA PISTA

const pedirPista = () => {


    // Array donde se guardarán todas las pistas de cada disco

    let todasLasPistas = [];

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

    //color = segundos >= 180 ? color = "red" : color = "black";


    // Validación de la duración de la pista

    if (segundos <= 0 || segundos > 7200 || isNaN(segundos)) {

        mensajeDeAlerta = alert("La cantidad de segundos no puede ser menor o igual a 0 ni mayor a 7200. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código

        return cargarDuracionDelDisco();

    } 

    return segundos;
}

// Array donde se guardarán los discos a medida que son cargados

let discos = [];

// Variables a llenar al cargar los datos

let nombre = "";
let autor = "";
let codigo;
let pista;

// Función para cargar los datos del disco al darle click al botón Cargar

function cargarDatosDelDisco() {

    do {

        nombre = pedirDato("Ingrese el nombre del disco");
        autor = pedirDato("Ingrese el autor del disco");
        codigo = cargarCodigoDelDisco();
        pista = pedirPista();

        // Creo acá un objeto llamado disco

        let disco = new Disco(nombre, autor, codigo, pista)

        // al array discos le agrego el nuevo disco con sus datos cargados

        discos.push(disco);
    }


    // Preguntar al usuario si desea cargar un nuevo disco

    while (confirm("Desea cargar otro disco?"))

}


function mostrarDiscosCargados() {

    let listaDiscos = "";
    listaDiscos +=

        `
     <p>Usted lleva cargados: ${discos.length} discos</p>

     `

    let html = "";

    discos.forEach(disco => {

        html += `<ul>
    <li>Nombre del disco: <strong> ${disco.nombre} </strong> </li>
    <li>Autor/ banda: <strong> ${disco.autor} </strong> </li>
    <li>Código único del disco: <strong> ${disco.codigo} </strong> </li>
    <li>Cantidad de pistas del disco: <strong> ${disco.pistas.length} </strong> </li>
    <li>Duración total del disco: <strong> ${disco.obtenerDuracion()} </strong> segundos</li>
    <li>Duración promedio del disco: <strong> ${disco.obtenerPromedio()} </strong> segundos </li>
    <li>Pista más alta del disco: <strong> ${disco.obtenerDuracionMasAlta()} </strong> segundos</li>
  
    </ul>
    
    <div>
    <ul>Lista de pistas y duración: ${disco.pistas.map(pistas => { 
        return `
        <li> <strong> ${pistas.nombre}</strong>: <span style= "color: ${pistas.duracion >= 180 ? "red" : "black"}"> ${pistas.duracion} </span> segundos</li>
        ` 
    })} 
    
    </ul>
    <div>
        `;

    })


    document.getElementById("listaDiscos").innerHTML = listaDiscos;
    document.getElementById("coleccion").innerHTML = html;

}