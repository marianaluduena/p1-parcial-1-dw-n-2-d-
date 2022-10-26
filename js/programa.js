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

// 1) SOLICITAR NOMBRE DEL DISCO

const ingresarNombreDelDisco = nombre => {

    this.nombre = prompt("Ingrese el nombre del disco");
    while (this.nombre == "") {

        mensaje = alert("Debe ingresar el nombre del disco");
        this.nombre = prompt("Ingrese el nombre del disco");
    }

    return nombre;
}

// 2) PEDIR AUTOR DEL DISCO 

const autorDelDisco = autor => {

    this.autor = prompt("Ingrese el autor o grupo del disco");
    while (this.autor == "") {
        mensaje = alert("Debe ingresar el autor o grupo del disco");
        this.autor = prompt("Ingrese el autor o grupo del disco");
    }

    return autor;

}

//autorDelDisco();

// 3) PEDIR CÓDIGO DEL DISCO

const codigoDeldisco = (ingresarCodigo, codigo) => {

    ingresarCodigo = parseInt(prompt("Ingresa el código del disco"));

    // El valor ingresado va guardarse en la var código
    codigo = ingresarCodigo;

    // Validar el código ingresado por número

    while (codigo <= 0 || codigo > 999) {

        mensaje = alert("El código no puede ser menor a 1 ni mayor a 999. Por favor ingrese un código válido");
        this.codigo = parseInt(prompt("Ingresa el código del disco nuevamente"));
    }

    // Se crea un array que va a guardar la var codigo para iterar en el ciclo

    let listaDeCodigos = [codigo];
    console.log(listaDeCodigos);
    return listaDeCodigos;

}

//codigoDeldisco();


// 4) CARGAR LAS PISTAS

const cargarPistaYDuracion = (nombreDePista, duracion) => {

    nombreDePista = prompt("Ingrese el nombre de la pista");
    // verificar que el dato no quede vacío

    while (nombreDePista == "") {
        mensaje = alert("Este campo es obligatorio. Por favor ingrese el nombre de la pista");
        nombreDePista = prompt("Ingrese el nombre de la pista");
    }

    // Array donde se irán guardando todos los nombres de las pistas
    let listaNombresDePistas = [nombreDePista];

    // Luego pedir la duración de la pista

    duracion = parseInt(prompt("Ingrese la duración de la pista medida en segundos."));

    // Verificar que la duración esté entre 0 y 7200 inclusive

    while (duracion < 0 || duracion > 7200) {

        mensaje = alert("La duración tiene que estar entre 0 y 7200 segundos inclusive. Por favor intente de nuevo");
        duracion = parseInt(prompt("Ingrese la duración de la pista medida en segundos."));
    }

    // Array donde se guardarán las duraciones de las pistas
    let listaDuracionDePistas = [duracion];

    // Preguntar al usuario si quiere cargar otra pista

    for (let i = 0; i < listaNombresDePistas.length; i++) {

        let cargarOtraPista = confirm("Desea ingresar otra pista?");

        if (!cargarOtraPista) {

            break;

        } else {
            cargarOtraPista = prompt("Ingrese una nueva pista");
            cargarOtraPista = listaNombresDePistas.push(cargarOtraPista);

                // Pedir la duración de la nueva pista

                duracion = parseInt(prompt("Ingrese la duración de la nueva pista"));

                duracion = listaDuracionDePistas.push(duracion);
        }

    }
    console.log(listaNombresDePistas);
    console.log(listaDuracionDePistas);
    return nombreDePista, duracion;
}

cargarPistaYDuracion();


/*
        listaDePistas = [cantidadDePistas];
        console.log(listaDePistas);
        return listaDePistas;

}*/







/*
        for (let i = 0; i < cantidadDePistas.length; i++) {

            nombreDePista = cantidadDePistas[i];
            console.log(nombreDePista);
        }*/

/*

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


const verificarCodigoUnico = (verificarCodigo) => {
    verificarCodigo = codigoDeldisco();

    if (verificarCodigo === codigoDeldisco) {
        alert("Código ya existente.");
    }
}

//verificarCodigoUnico();