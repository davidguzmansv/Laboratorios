//INCIALIZANDO CONTROLES
const btnpotencia  = document.getElementById("idBtnPotencia");
const btnresultado = document.getElementById("idBtnResultado");
const base     = document.getElementById("idTxtBase");
const potencia   = document.getElementById("idTxtPotencia");

//Registrar evento click del raton al repsionar botones de envio
const iniciar = () => {
    if (btnpotencia.addEventListener) {
        btnpotencia.addEventListener("click", calcularpotencia, false);
    }   else {
        btnpotencia.attachEvent("onclick", calcularpotencia);
    }
    if (btnresultado.addEventListener) {
        btnresultado.addEventListener("click", calcularresultado, false);
    }   else {
        btnresultado.attachEvent("onclick", calcularresultado);
    }
};

const calcularpotencia = function () {
    if (base.value == "" || potencia.value =="") {
        alert("Faltan campos por llenar");
    }   else {
        var pot = new operacion(base.value, potencia.value);
        pot.mostrar(pot.cpot(), "Potencia");
    }
    return false;
};

const calcularresultado = function () {
    if (base.value == "" || potencia.value =="") {
        alert("Faltan campos por llenar");
    }   else {
        var resu = new operacion(base.value, potencia.value);
        resu.mostrar(resu.cresultado(), "resultado");
    }
    return false;
};

//Creando una clase de rectángulo
const operacion = function (base, potencia) {
    //Propedades de la clase
    this.base   = parseFloat(base);
    this.potencia = parseFloat(potencia);
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.cpot     = new Function("return this.base * this.potencia");
    this.cresultado = new Function("return this.base * this.potencia");
    this.mostrar    = new Function(
        "valor",
        "tipoc",
        "alert('El ' + tipoc + ' es: ' + valor)"
    );
};

//Inicializando controles
iniciar();
