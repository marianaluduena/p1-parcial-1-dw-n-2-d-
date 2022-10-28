class DatosDelDisco {
    constructor(nombre, autor, codigo) {

        this.nombre = nombre,
            this.autor = autor,
            this.codigo = codigo;
    }
    //codigo = [];
    pistas = [];
    duracion = [];

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

const cargarCodigoDelDisco = () => {
    let codigo = parseInt(prompt("Ingresa el código del disco"));

    // Validación para que el código ingresado esté en rango
    if (codigo <= 0 || codigo > 999) {
        mensaje = alert("El código no puede ser menor a 1 ni mayor a 999. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarCodigoDelDisco();
    }

    return codigo;
}

// 4) PEDIR EL NOMBRE DE LA PISTA
// 5) PEDIR DURACIÓN DE LA PISTA


const cargarDuracionDelDisco = () => {
    let segundos = parseInt(prompt("Ingrese la duración de la pista medida en segundos"));

    // Validación de la duración de la pista

    if (segundos < 0 || segundos > 7200) {

        mensaje = alert("La cantidad de segundos no puede ser menor a 0 ni mayor a 7200. Por favor ingrese un código válido");

        // Se volverá a pedir al usuario que ingrese de nuevo el código
        return cargarDuracionDelDisco();

    }
    return segundos;
}

// 6) PREGUNTAR AL USUARIO SI DESEA CARGAR OTRA PISTA

function cargarOtraPista() {

    // Pistas ya tiene previamente un dato cargado
    pistas = [-1];

    for (var i = 0; i < pistas.length; i++) {

        let ingresarOtraPista = confirm("Desea agregar otra pista?");

        if (!ingresarOtraPista) {
            break;
        }else{
            pistas = pedirDato("Ingresa el nombre de la pista");
            duracion = cargarDuracionDelDisco();
        }
        ingresarOtraPista = pistas[i];
    }
       return pistas;
}



function cargarDatosDelDisco() {

    nombre = pedirDato("Ingrese el nombre del disco");
    autor = pedirDato("Ingrese el autor del disco");
    codigo = cargarCodigoDelDisco();
    pistas = pedirDato("Ingresa el nombre de la pista");
    duracion = cargarDuracionDelDisco();
    cargarOtraPista();
}

function mostrarDiscosCargados() {

    // Las variables ya tienen los datos del usuario

    nombre;
    autor;
    codigo;
    pistas;
    duracion;

    let disco = new DatosDelDisco(nombre, autor);
    disco.codigo = codigo;
    disco.pistas = pistas;
    disco.duracion = duracion;

    html = `<ul>
    <li>${disco.nombre}</li>
    <li>${disco.autor}</li>
    <li>${disco.codigo}</li>
    <li>${disco.pistas}</li>
    <li>${disco.duracion}</li>
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