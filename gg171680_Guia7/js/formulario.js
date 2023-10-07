//accediendo a los elementos html
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNAcimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const intputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const notificacion = document.getElementById("idNotificacion");
//Componente de Bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

//Componente mdodal
const idModal = document.getElementById("idModal");

//Arreglo global de pacientes
let arrayPaciente = [] ;

/*
Creando una funcio  para que limpie el formulario
siempre que se cargue la pagina o cuando se presiones
el boton limpiar del formaulario
*/

const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "01/01/2020";
    inputRdMasculino.checked = false;
    intputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
};

/*
Funcion para validar el ingreso del paciente
*/

const addPaciente = function() {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = 
        inputRdMasculino.checked == true
            ? "Hombre"
            : intputRdFemenino.checked == true
            ? "Mujer"
            : "";
    let pais=cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if(
        nombre != "" &&
        apellido != "" &&
        fechaNacimiento != "" &&
        sexo != "" &&
        pais != 0 &&
        direccion != ""
    ) {
        //Agregando informacion al arreglo paciente
        arrayPaciente.push(
            new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
        );

        //Asignando un mensaje a nuestra nottificacion
        mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        //Llamando al componente de Bootstrap
        toast.show();

        //Limpiando formulario
        limpiarForm();
    }   else {
        //Asignando un mensaje a nuestra notificacion
        mensaje.innerHTML = "Faltan campos por completar"
        //Lamandoa al compponente Bootstrap
        toast.show();
    }
};

//Funcion que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let $fuka = "";
    let contador = 1;

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${contador}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button id="idBtnEditar${contador}" type="button" class="btn btn-primary" alt="Eliminar">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button id="idBtnEliminar${contador}" type="button" class="btn btn-danger" alt="Editar">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </td>
                </tr>`;
        contador++;
    });

}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
                        <table class="table table-striped table-hover table-borderer">
                            <tr>
                                <th scope="col" class="text-center" style="width:5%">#</th>
                                <th scope="col" class="text-center" style="width:15%">Nombre</th>
                                <th scope="col" class="text-center" style="width:15%">Apellido</th>
                                <th scope="col" class="text-center" style="width:10%">Fecha Nacimiento</th>
                                <th scope="col" class="text-center" style="width:10%">Sexo</th>
                                <th scope="col" class="text-center" style="width:10%">Pais</th>
                                <th scope="col" class="text-center" style="width:25%">Direccion</th>
                                <th scope="col" class="text-center" style="width:10%">Opciones</th>
                            </tr>
                            ${imprimirFilas()}
                        </table>
                    </div>
                `;
    document.getElementById("idTablaPacientes").innerHTML = $table;                                
};

//Contaodr global de los option correspondiente
// al select (cmb) pais
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew != "") {
        //Creando nuevo option con la API  DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        //Agregando el nuevo option en el select
        cmbPais.appendChild(option);

        //Asignando un mensaje a nuestra notificacion
        mensaje.innerHTML = "Pais agregado correctamente";
        //Lammando al componente de Bootstrap
        toast.show();
    }   else {
        //Asignando u mensaje a nuestra notificacion
        mensaje.innerHTML = "Faltan campos por completar";
        //Llamando al componente de Bootstrap
        toast.show();
    }
};

//Agregando eventos a los otones y utilizando funciones tipo flecna
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};

//Se agrega el focus en el capo nombre pais del modal
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

//Ejecutar funcion al momento de cargar la pagina HTML
limpiarForm();