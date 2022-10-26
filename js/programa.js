class DatosDelDisco {

    constructor(nombre, autor, codigo, duracion) {

        this.nombre = nombre,
            this.autor = autor,
            this.codigo = codigo;
        this.pistas = [];
        this.duracion = duracion;
    }
}

let coleccionDiscos = []; // array vacío para cargar después todos los datos de los discos
let mensaje = "";

// Crear el objeto disco

let disco = new DatosDelDisco();

//Solicitar nombre del disco

const ingresarNombreDelDisco = nombre => {

    this.nombre = prompt("Ingrese el nombre del disco");
    while (this.nombre == "") {

        mensaje = alert("Debe ingresar el nombre del disco");
        this.nombre = prompt("Ingrese el nombre del disco");
    }

    return nombre;
}

// ingresarNombreDelDisco();

/*
// Necesito un lugar para guardar los discos ingresados


function guardarDisco() {

    let escribirDisco = "";
    escribirDisco += `<ul>`

    // necesito un nro para recorrer el array

    let cantidadDeDiscos = this.coleccionDiscos.lenght;

    for (let i = 0; i < cantidadDeDiscos.lenght; i++) {

        // variable donde se guardará la cantidad de discos dentro de un tag li

        escribirDisco += `<li>${this.coleccionDiscos[i]}</li>`;
    }
    escribirDisco += `</ul>`
    document.write(escribirDisco);
}

guardarDisco();*/

const autorDelDisco = autor => {

    this.autor = prompt("Ingrese el autor o grupo del disco");
    while (this.autor == "") {
        mensaje = alert("Debe ingresar el nombre del disco");
        this.autor = prompt("Ingrese el autor o grupo del disco");
    }

    return autor;

}

//autorDelDisco();

const codigoDeldisco = (ingresarCodigo, codigo) => {

    ingresarCodigo = parseInt(prompt("Ingresa el código del disco"));

    // El valor ingresado va guardarse en la var código
    codigo = ingresarCodigo;

    // Validar el código ingresado por número

    while (codigo <= 0 || codigo > 999) {

        mensaje = alert("El código no puede ser menor a 1 ni mayor a 999. Por favor ingrese un código válido");
        codigo = parseInt(prompt("Ingresa el código del disco nuevamente"));
    }

    let listaDeCodigos = [codigo];

    for (let i = 0; i < listaDeCodigos.length; i++) {

        const prueba = listaDeCodigos[i];
        console.log(prueba);
    }
    return codigo;


}

codigoDeldisco();



// Verificar si el código ingresado está repetido: cómo?
//Opción 1: cada dato del disco se va a ir guardando en una etiqueta html, por lo que quizá verificando en el html sería una opción
// Para eso, primero hay que crear la función que permita crear el tag html y guardar los datos


/*
    for(let i = 0; i < listaDeCodigos.length; i++){

        listaDeCodigos = listaDeCodigos[i];
    }
    
    console.log(listaDeCodigos);*/



/*
const verificarCodigoUnico = verificarCodigo => {
    verificarCodigo = codigoDeldisco();

    if (verificarCodigo === codigoDeldisco) {
        alert("Código ya existente.");
    }

}

verificarCodigoUnico();*/




// CARGAR PISTAS

/*
const cargarPistas = nombreDePista => {

 // pedir el nombre de la pista
    nombreDePista = prompt("Ingrese el nombre de la pista");

    // array donde se van a guardar las pistas ingresadas
    const cantidadDePistas = [];

    for (let i = 0; i < cantidadDePistas.length; i++) {
       
        nombreDePista = cantidadDePistas[i];
        console.log(nombreDePista);
    }*/

/*
let cantidadDePistas = [];

function cargarPistas() {

    // Primero se pide el dato
    // y ese dato se tiene que guardar en un array
    // se crea el array para guardar el dato


    const nombreDePista = prompt("Ingrese el nombre de la pista");
    let totalPistas = 0;
    // array donde se van a guardar las pistas ingresadas

    for (let i = 0; i < cantidadDePistas.length; i++) {

        totalPistas = cantidadDePistas[i];
        //cantidadDePistas += nombreDePista
        // cantidadDePistas.push( nombreDePista);
        // nombreDePista = cantidadDePistas[i];
        console.log(nombreDePista);
    }
    return nombreDePista;
}

//cargarPistas();*/

/*
// pedir la duración 
duracionDePista = parseInt(prompt("Ingrese la duración medida en segundos de la pista"));
this.duracion = duracionDePista;

// Validar la duración

while (duracion < 0 && duracion > 7200) {

    mensaje = alert("Dato no válido. La duración tiene que estar entre los 0 y los 7200 segundos como máximo. Por favor intente de nuevo");
    duracion = parseInt(prompt("Ingrese de nuevo la duración de la pista"));
}*/

/*
return console.log(pistas, duracion);*/

//cargarPistas();