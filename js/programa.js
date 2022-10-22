// Función para cargar disco: solicitar el nombre del disco, el autor o banda y el código del disco
let mensaje = "";
let discos = [];

function cargar(nombre, banda, codigo) {
    nombre = prompt("Por favor ingrese el nombre del disco");

    if (nombre !== "string") {
        mensaje = alert("No es un dato válido. Por favor intente de nuevo");
    }

    console.log(nombre);

   /* banda = prompt("Ingrese el nombre del artista o banda");

    if(nombre !== "string"){
        mensaje = alert("No es un dato válido. Por favor intente de nuevo");
    }

    console.log(banda);

    codigo = parseInt(prompt("Por favor ingrese el código del disco"));

    if(codigo == codigo || codigo === codigo){
        mensaje = alert("Código ya existente. Intente de nuevo");
    }*/
}