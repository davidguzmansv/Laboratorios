document.addEventListener("DOMContentLoaded", function() {
    //Accedemnos al contenedor donde se mostrará los estudiantes
    const containerAsignaturas = document.querySelector(
        "#idContainerAsignaturas"
    );
    const containerUnidades = document.querySelector(
        "#idContainerUnidades"
    );

    //Accedemos a cada boton por medio de la API DOM
    const btnAddAsignatura = document.querySelector("#idBtnAgregarAsignatura");
    const btnViewCum = document.querySelector("#idBtnMostrarCUM");

    //Agegamos el evento click a los botones, adicionalmente
    //se les asigna la funcion que realizará la operacion
    btnAddAsignatura.addEventListener("click", addAsignatura);
    btnViewCum.addEventListener("click", viewCum);

    // Arreglo de forma global
    let arrayAsignaturas = new Array()

    //creando funciones
    function addAsignatura() {
        const inputNombre = document
        .querySelector("#inputNombre")
        .value.toString()
        .toUpperCase();
        const inputUnidades = document
        .querySelector("#inputUnidades")
        .value.toString()
        .toUpperCase();
        const inputNota = document
        .querySelector("#inputNota")
        .value.toString()
        .toUpperCase();
        
        if(inputNombre != "" && inputUnidades != "" && inputNota != ""){
            arrayAsignaturas.push(
                new Array(inputNombre, inputUnidades, inputNota)
            );
            alert("Se resgistró los datos de asignatura");
            //Limpiando campos del formulario
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputUnidades").value = "";
            document.querySelector("#inputNota").value = "";
            document.querySelector("#inputNombre").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewCum() {
        //validando que existan asignaturas registrados
        let totalAsignaturas = arrayAsignaturas.length;
        if (totalAsignaturas > 0){
            let nombre;
            let unidades;
            let nota;
            let um = 0;
            let suv = 0;
            let cum =0;
            let uvinscrbir;
            let table = "<table class='table table-light table-striped'>";
            table += "<thread>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Asignatura</th>";
            table += "<th scope='col'>Unidades</th>";
            table += "<th scope='col'>Notas</th>";
            table += "</tr>";
            table += "</thread>";
            table += "<tbody>";

            //Se utiliza un bucle for para recorrer el arreglo de asignaturas
            for (let i = 0; i< arrayAsignaturas.length; i++) {
                //Accediendo a las posiciones del arreglo
                nombre   = arrayAsignaturas[i][0];
                unidades = arrayAsignaturas[i][1];
                nota     = arrayAsignaturas[i][2];

                suv      = suv + parseInt(unidades);
                um       = um + (unidades*parseFloat(nota));

                table += `<tr>`;
                table += `<td scope='row' style=''font-weight: bold; '>${i + 1}</td>>`;
                table += `<td>${nombre}</td>`;
                table += `<td>${unidades}</td>`;
                table += `<td>${nota}</td>`;
                table += `</tr>`;
            }
            
            table += "</tbody>";
            table += "</table>";
            // Se envia la tabla al contenedor de asignaturas
            containerAsignaturas.innerHTML = table;

            cum = parseFloat(um / suv).toFixed(2);

            let listado = "<h3>Uniddes Valorativas</h3>";
            listado += "<ol>";  
            //verificacion de calificacion mas alta
            if (cum >= 7.5) {
                uvinscrbir = 32;
            }   else if (cum >= 7.0) {
                        uvinscrbir = 24;
                    } else {
                            uvinscrbir=20;
                        }

            listado += "</ol>";
            //cum = parseFloat(um / suv).toFixed(2);
            listado += `<p><b>C.U.M.:</b> ${cum}`;
            listado += `<br><b>Unidades Valorativas a inscriir:</b>${uvinscrbir}</p>`;

            //Imprimiendo resultado
            alert(`CUM: ${cum} UV a inscribir: ${uvinscrbir}`);
            //containerUnidades.innerHTML = listado;
            console.log(cum, suv, um, uvinscrbir);

        } else {
            alert("No se han registrado asignaturas");
        }
    }

});