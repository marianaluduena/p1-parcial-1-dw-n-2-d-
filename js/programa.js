class datosDelDisco {

    constructor(nombre, autor, codigo, duracion) {

        this.nombre = nombre,
        this.autor = autor,
        this.codigo = codigo;
        this.pistas = [];
        this.duracion = duracion;
        this.coleccionDiscos = [];
    }
}


let mensajeValorVacio = "";

// Crear el objeto disco

let disco = new datosDelDisco();

//Solicitar nombre del disco

const ingresarNombreDelDisco = nombre => {

    this.nombre = prompt("Ingrese el nombre del disco");
    while (this.nombre == "") {

        mensajeValorVacio = alert("Debe ingresar el nombre del disco");
        this.nombre = prompt("Ingrese el nombre del disco");
    }

    return nombre;
}

ingresarNombreDelDisco();


const autorDelDisco = autor => {

    this.autor = prompt("Ingrese el autor o grupo del disco");
     while (this.autor == "") {
         mensajeValorVacio = alert("Debe ingresar el nombre del disco");
         this.autor = prompt("Ingrese el autor o grupo del disco");
     }
 
     return autor;
 
 }
 
 autorDelDisco();