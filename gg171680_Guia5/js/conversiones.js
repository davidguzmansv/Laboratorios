document.addEventListener("DOMContentLoaded",function () {
    //Accedemos al parrafo que nos permitira imprimir el resultado
    const parrafo = document.querySelector("#idParrafo");
    console.log(parrafo);
    
    //Accedemos a cada boton por medio de la API DOM
    const btnPies = document.querySelector("#idBtnPies");
    const btnYardas = document.querySelector("#idBtnYardas");
    const btnPulgadas = document.querySelector("#idBtnPulgadas");
    
    //Agregaremos el evento click a los botones, adicionalmente
    //se le asigna la funcion que realizara la conversion
    btnPies.addEventListener("click", pies);
    btnYardas.addEventListener("click", yardas);
    btnPulgadas.addEventListener("click", pulgadas);
    
    //Creamos la variable que tendra el valor del resutado de la conversion
    let resultado;
    
    //Funcion de operaciones
    function pies() {
        let metros = prompt("Ingrese la cantidad de metros");
        resultado = metros * 3.28;
        parrafo.innerHTML = `${metros}  metros = ${resultado}  pies`;
    }
    
    function yardas() {
        let metros = prompt("Ingrese la cantidad en metros");
        resultado = metros * 1.094;
        parrafo.innerHTML = `${metros}  metros = ${resultado}  yardas`;
    }
    
    function pulgadas() {
        let metros = prompt("Ingrese la cantidad en metros");
        resultado = metros * 39.37;
        parrafo.innerHTML = `${metros}  metros = ${resultado}  pulgadas`;
    }
});