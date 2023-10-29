// Obteniendo la referecnia de los botones
// por medio del .getElementById

const buttonSpan   = document.getElementById("idBtnSpan");
const buttonP      = document.getElementById("idBtnP");
const buttonDiv    = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir     = document.getElementById("idImprimirResultado");

// Definicion de Funciones
const contarElementos = function (elemento) {
    //Obteniendo el numero de etiquetas Span que se han creado
    //en el documento HTML
    let arrayElement = document.getElementsByTagName(elemento);
    console.log(
    `Etiquetas buscadas <${elemento}></${elemento}> / Total encontradas : ${arrayElement.length}`
    );
    for (const i of arrayElement) {
        console.log(i);
    }

    alert("Revise la consola del navegador");
};

//Definicion de Eventos para los Botones
buttonSpan.onclick = () => {
    contarElementos("span");
};

buttonP.onclick    = () => {
    contarElementos("p");
} ;

buttonDiv.onclick  = () => {
    contarElementos("div");
};

buttonButton.onclick = () => {
    contarElementos("button");
};
