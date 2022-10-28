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

    