//INCIALIZANDO CONTROLES
const btnarea  = document.getElementById("idBtnAltura");
const btnperim = document.getElementById("idBtnPerimetro");
const base     = document.getElementById("idTxtBase");
const altura   = document.getElementById("idTxtAltrua");

//Registrar evento click del raton al repsionar botones de envio
const iniciar = () => {
    if (btnarea.addEventListener) {
        btnarea.addEventListener("click", calculararea, false);
    }   else {
        btnarea.attachEvent("onclick", calculararea);
    }
    if (btnperim.addEventListener) {
        btnperim.addEventListener("click", calcularperimetro, false);
    }   else {
        btnperim.attachEvent("onclick", calcularperimetro);
    }
};

const calculararea = function () {
    if (base.value == "" || altura.value =="") {
        alert("Faltan campos por llenar");
    }   else {
        var rect = new rectangulo(base.value, altura.value);
        rect.mostrar(rect.carea(), "área");
    }
    return false;
};

const calcularperimetro = function () {
    if (base.value == "" || altura.value =="") {
        alert("Faltan campos por llenar");
    }   else {
        var peri = new rectangulo(base.value, altura.value);
        peri.mostrar(peri.cperimetro(), "perímetro");
    }
    return false;
};

//Creando una clase de rectángulo
const rectangulo = function (base, altura) {
    //Propedades de la clase
    this.base   = parseFloat(base);
    this.altura = parseFloat(altura);
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.carea      = new Function("return this.base * this.altura");
    this.cperimetro = new Function("return 2*this.base + 2*this.altura");
    this.mostrar    = new Function(
        "valor",
        "tipoc",
        "alert('El ' + tipoc + ' es: ' + valor)"
    );
};

//Inicializando controles
iniciar();
