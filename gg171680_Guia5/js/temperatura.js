//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
//let celsiusaFarenheit = Math.floor(Math.random() * 25 ) + 1;
//let celsius

function celciusaFahreneit(){
//Definimos una variable  para impresion de mensajes
    let resultado
    //let mensaje;
    //Utilizamos el dom para acceder al parrafo creado
    const parrafo = document.querySelector("#idParrafo");

    //Verificamos en que intentoesta el usuario
   
        let celcius = prompt(
            "Ingrese temperatura en Celcius" 
        );

    //verificamos el numero aleatorio con el ingresado por el usuario    ºC x 1.8 + 32.
    resultado = celcius * 1.8 + 32
    parrafo.innerHTML = `${celcius} ºCelcius = ${resultado}  ºFahrenheit`;
}