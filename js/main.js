// Vectores con nombres, apellidos y equipos para generar los datos aleatorios de bienvenida
let nombres = ["Walter", "Carlos", "Esteban", "Lucas", "Ignacio"];
let apellidos = ["Ruiz", "Schumacher", "Milei", "Musk", "Asimov"];
let equipos = ["Boca", "River", "San Lorenzo", "Chacarita", "Independiente"];

// Función para elegir un elemento aleatorio de un array
function elegirAleatorio(vector) {
    return vector[Math.floor(Math.random() * vector.length)];
}

// Seleccionar aleatoriamente un nombre, apellido y equipo
let nombreAleatorio = elegirAleatorio(nombres);
let apellidoAleatorio = elegirAleatorio(apellidos);
let equipoAleatorio = elegirAleatorio(equipos);

// Mostrar el resultado en un alert al cargar la página
$(document).ready(function(){
    //alert("Bienvenido " + nombreAleatorio + " " + apellidoAleatorio + " hincha de " + equipoAleatorio + ".");
    let mensaje = "Bienvenido " + nombreAleatorio + " " + apellidoAleatorio + " hincha de " + equipoAleatorio + "."
    Swal.fire({
        title: "Bienvenido!",
        text: mensaje,
        icon: "success"
      });
});

// Formulario donde el usuario ingresa los datos manualmente
$(document).ready(function(){
    $("#form-datos").on("submit", function(event) {
        event.preventDefault();

        // valores ingresados por el usuario
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let equipo = $("#equipo").val();

        // Mostrar mensaje de bienvenida
        let mensaje = "Hola " + nombre + " " + apellido + " hincha de " + equipo + ".";
        $("#mensaje-bienvenida").text(mensaje);
    });
});

//Caludo de dias desde fecha de nacimiento
$(document).ready(function(){
    $("#form-datos").on("submit", function(event) {
        event.preventDefault();

        //ingreso de fecha de nacimiento
        let fechaNacimiento = $("#fecha-nacimiento").val();

        // calculo de días
        let hoy = new Date();
        let fechaNac = new Date(fechaNacimiento);
        let diferenciaTiempo = hoy - fechaNac;
        let diasVividos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

        // Se muestra mensaje con los dias que vivió
        let mensajeDias = "Viviste desde que naciste un total de " + diasVividos+ " días.";
        $("#mensaje-edad").text(mensajeDias);
    });
});