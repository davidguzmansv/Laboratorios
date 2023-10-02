//Accedemos al contenedor donde se mostrara los estudiantes
const containerOperaciones = document.querySelector("#idContainerOperaciones");

//Accedemos a cada boton por medio de la API DOM
const btnOperaciones = document.querySelector("#idBtnOperaciones");

//Agregamos el evento click a los botones, adicionalmente
//se le asigna la funcion que realizar la operacion
btnOperaciones.addEventListener("click", generarOperaciones);

function generarOperaciones() {
    //utilizaremos un arreglo para guardar la informacion del estudiante
    let arrayOperaciones = new Array();

    let totalCifras = document.querySelector(
        "#inputNumeroCifras"
    ).value;
    let contador = 1;

    //utilizaremos un while para recorrer el total de la cifra
    l

    //recorriendo el arreglo con for..of
    //Verificaremos cual es el promedio de las calificaciones
    // y cual de los estudoantes posee la calidifcacion mas alta
    
    listado += "</ol>";
    promedio = parseFloat(promedio / arrayEstudiante.length).toFixed(2);
    listado += `<p><b>Promedio de calificaciones:</b> ${promedio}`;
    listado += `<br><b>Estudiante con mejor calificacion:</b>${posicion[0]}</p>`;

    //Imprimiendo resultado
    containerCifras.innerHTML = listado;
}