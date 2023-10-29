//Accediendo a la referencia del formulario que
// tendra los nuevos elementos
const newForm = document.getElementById("idNewForm");

//Accediendo a la referencia de Botones
const buttonCrear       = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

//Accediendo al valor del select para determinar el tipo de elemento a crear
const cmbElemento       = document.getElementById("idCmbElemento");

//Accediendo a lso controles del modal
const tituloElemento    = document.getElementById("idTituloElemento");
const nombreElemento    = document.getElementById("idNombreElemento");

//Creando Modal con BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// Agregando Funciones
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    //Validando que se haya seleccionado un elemento
    if(elemento != "") {
        //Metodo perteneciente al modal de bootstrap
        modal.show();
    }   else {
        alert("Debe seleccionar el elemento que se creará");
    }
};

const newSelect = function () {
    //Creando elementos
    let addElemento = document.createElement("select");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    //Creando option para el select
    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    //Creando Label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);  
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando label de Id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    //Creanbdo plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    //Agregando atributos
    divElemento.setAttribute("class", "form-floating");

    //Creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que sera hijo del nuevo formulario
    newForm.appendChild(labelId);

    //Creando el Div que será hijo del nuevo formulario
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento) {
    //Creando elementos
    let addElemento = document.createElement("input");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");
    
    //creando label para el nuevo elemento
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //Creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    //Creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    //Agregando atributos
    divElemento.setAttribute("class", "form-check");

    //Creando el input que será hijo del div
    divElemento.appendChild(addElemento);
    //Creando el label que será hijo del div
    divElemento.appendChild(labelElemento);

    //Creando el SPAN que será hijo del nuevo formulario
    newForm.appendChild(labelId);

    //Creando el Div que seré hijo del nuevo formulario
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento) {
    //Creando elemento de tip = text, number, date y password
    let addElemento =
        newElemento == "textarea"
        ? document.createElement("textarea")
        : document.createElement("input");

    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    //Creando lapbel para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    //Creando icono para label
    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    //creando texto para label
     labelElemento.textContent = tituloElemento.value;

     //creando el elemento i como hijo de labelm aftebegin le 
     //indicamos que se creara antes de su primer hijo
     labelElemento.insertAdjacentElement("afterbegin", iconLabel);

     //Creado label de id
     let labelId = document.createElement("span");
     labelId.textContent = `ID de control : ${nombreElemento.value}`;

     //Creando plantilla de bootstrap para visualizar el nuevo elemento
     let divElemento = document.createElement("div");
     //Agregando atributos
     divElemento.setAttribute("class", "form-floating mb-3");

     //Creando el input que sera hijo del div
     divElemento.appendChild(addElemento);
     //Creando el label que sera hijo del div
     divElemento.appendChild(labelElemento);

     //Creando el sPAN que sera hijo del nuevo formulario
     newForm.appendChild(labelId);

     //Creando el Div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento);
};

//Agregando Evento Click a los Botones
buttonCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;

        if (elemento == "select") {
            newSelect();
        }   else if (elemento == "radio" || elemento == "checkbox") {
            newRadioCheckbox(elemento);
        }   else {
            newInput(elemento);
        }
    }   else {
        alert("Faltan campos por completar");
    }
};

// Agregando evento para el modal de bootstrap
document.getElementById("idModal").addEventListener("shown.bs.modal", () => {
    // Limpiadno campos para los nuevos elementos
    tituloElemento.value = "";
    nombreElemento.value = "";
    //inicializandp puntero en el campo del titulo para el control
    tituloElemento.focus();
});