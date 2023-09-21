//Generamos un numero aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25 ) + 1;
//creamos una constante que permite identificar el maximo de intentos
const numeroIntentos = 3;
//guarda el numero de intentos que realiza el usuario
let intentos= 1;
function generarNumeroAleatorio(){
//Definimos una variable  para impresion de mensajes
    let mensaje;
    //Utilizamos el dom para acceder al parrafo creado
    const parrafo = document.querySelector("#idParrafo");

    //Verificamos en que intentoesta el usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "¿Qué numero se ha generado (Intento " + intentos + ")?" 
        );

    //verificamos el numero aleatorio con el ingresado por el usuario
    if(numero == numeroAleatorio){
        mensaje = `¡Es sorpendetne, pudiste adivinar el numero oculto (${numeroAleatorio}).
            Refresque la página para volver a jugar.`;
    } else if (intentos == numeroIntentos){
       mensaje = `Su numero de intentos ha terminado.
            El numero oculto era:${numeroAleatorio}. Refresque la página para volver a jugar.`;  
    } else {
        mensaje = `Vuelve a intentar. Quedan ${
            numeroIntentos - intentos
        } intentos`;
    }

    //aumentamos el valor de los intentos
    intentos ++;
    } else {
        mensaje = `Su numero de intentos ha terminado.
            El numero oculto era:${numeroAleatorio}. Refresque la página para volver a jugar.`;   
    }

    parrafo.innerHTML = mensaje;
}