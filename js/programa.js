"use strict"

class DatosDelDisco {
    constructor(nombre, autor, codigo) {

        this.nombre = nombre,
            this.autor = autor,
            this.codigo = codigo;
    }

    pistas = [];

}

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

    // Declaro las variables donde se guardarán los datos solicitados

    let nombrePista = "";
    let duracionPista;

    do {

        nombrePista = pedirDato("Ingrese el nombre de la pista");

        // 5) PEDIR DURACIÓN DE LA PISTA

        duracionPista = cargarDuracionDelDisco();

        // En el array vacío todasLasPistas se guardarán el nombre y la duración de cada pista

    
        todasLasPistas.push({
            nombre: nombrePista,
            duracion: duracionPista

        });

        // 6) PREGUNTAR AL USUARIO SI DESEA CARGAR OTRA PISTA

    } while (confirm("Desea cargar otra pista?"))
    return todasLasPistas;
}


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

// 7) PINTAR DE ROJO LAS PISTAS MAYORES A 180 EN LA FUNCIÓN MOSTRAR DISCOS


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



        discos.push({

            nombre: nombre,
            autor: autor,
            codigo: codigo,
            pistas: pista

        });
        // Preguntar al usuario si desea cargar un nuevo disco

    } while (confirm("Desea cargar otro disco?"))

}


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
    <ul>Lista de pistas y duración: ${disco.pistas.map(pista => { 
        return `
        <li> <strong> ${pista.nombre}</strong>: <span class= "highlight__red"> ${pista.duracion} </span> segundos</li>` 
    })} 
    
    </ul>
    <div>
   </ul>`;

})

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