//otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
//Nóotese que para este caso no se antepone el caracter #
const campo = document.getElementById("idTxtNumero");

//definamos una funcion anonima que permita validar en tiempo real el ingreso de un numero
const validarNumero = function(e) {
    //creamos una expresion regular que valida que sean números
    let validar = /^[0-9]{1}$/;
    let tecla = e.key;

    /*
    .test valida que la expresion regular coincida con el valor ingresado
    podrá observar que al intentar teclear una letro u otro caracter diferente 
    a un número este no se escribe en el campo
    */
   if (!validar.test(tecla)) e.preventDefault();
};

//definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

//Trabajando con el boton Calcular
const boton = document.getElementById("idBtnCalcular");

//Definiendo una funcion anónima para calcular el factorial de un número
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1); 
}

//Definamos una funcion de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

//Definiendo una funcion tradicional
function calcular() {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != "") {
        //Llamamos a la funcion anónima para calcular el factorial
        let resultado = calcularFactorial(numero);
        //Enciando el resultado a una funcio  tipo flecha
        imprimir(numero, resultado);
    }   else {
        alert("Debe ingresar un número válido");
    }

}
    //definiendo el evento click para el boton
    boton.addEventListener("click", calcular);
