//la fecha del dia en la zona del cliente web
//usando el objeto Date de JavaSCript
let fechaHoy = new Date();

//Calculo del desfase en el huso horario para hacer
//luego el ajuste con la zo<na horaria sellecionada
//en el elemento select del formulario
let desfase = -Math.round(fechaHoy.getTimezoneOffset() / 60) + 12;

//registrar evento click del ratón al presionar botones de envio
const iniciar = function () {
    let select = document.getElementById("zhselect");
    if (select.addEventListener) {
        select.addEventListener("change", getHoraLocal, false);
    }   else {
        select.attachEvent("onchange", getHoraLocal);
    }
};

//Funcion getHoraLocal()
//Calcula la hora en la zona horaria selccionada
const getHoraLocal = function (){
    let fechaHoy = new Date();
    //Ajustar el desfase horario respecto a la zona selccionada.
    //Por ejemplo, la zona horaria para America Central esta
    //en el indice 6 de la collecion de opciones del elemento select.
    //Si un usuario seleccionara la zona horaria de Tokio que esta
    //en el indice  21 de la coleecion el caclculo se realizaia asi:
    //21 - desfase del cliente (zona horaria de America Central) = 15
    let zh = document.frmZonaHoraria.zonas.selectedIndex - desfase;

    //sumar  (o restar) las horas  de desfase resepcto a la hora
    //local del clientee
    fechaHoy.setHours(fechaHoy.getHours() + zh);

    //Informar la hora local del huso horario elegido
    document.frmZonaHoraria.hour.value = fechaHoy.toLocaleString();
};

//Inicializando datos
iniciar();
getHoraLocal();