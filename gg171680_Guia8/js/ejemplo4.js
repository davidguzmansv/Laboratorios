//Creando el objeto
let book = new Object();

//Registrar evento click del raton al presionar botones de envio
const iniciar = function () {
    const showinfo = document.getElementById("idBtnEnviar");
    const txtAutor = document.getElementById("txtautor");
    txtAutor.focus();
    if (showinfo.addEventListener) {
        showinfo.addEventListener(
            "click", 
            function () {
                createObject(document.frmbook);
            },
            false
        );
    }   else if (showinfo.attachEvent) {
        showinfo.attachEvent("onclick", function () {
            createObject(document.frmbook);
    });
    }
};

// Creando el nuevo objeto
const createObject = function (form) {
    //Verificando que exista autor, nombre del libro y pais
    if (
        form.txtautor.value == "" ||
        form.txtitulo.value == "" ||
        form.txtpais.value == ""
    ) {
        alert("faltan campos por completar");
        return false;
    }

    book.autor = form.txtautor.value;
    book.titulo = form.txtitulo.value;
    book.editorial =
        form.seleditorial.options[form.seleditorial.selectIndex].text;
    book.edicion = form.seledicion.options[form.seledicion.selectIndex].text;
    book.pais = form.txtpais.value;

    showProperties(book, "InfoBook");
};

const showProperties = function (objeto, objName) {
    let infBook = "";
    let tblBook = "";

    for (let i in objeto) {
        infBook = infBook + objName + "." + i + "=" + objeto[i] + "\n";
    }
    if (!confirm(infBook + "\n\n¿Desea agregar la siguiente informacion?")) {
        frmbook.txtautor.value = "";
        frmbook.txtitulo.value = "";
        frmbook.seleditorial.vaue = "a";
        frmbook.seledicion.value = "a";
        frmbook.txtpais.value = "";
    }
    tblBook = `
    <table class="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope ="col" class="text-center">Título</th>
                <th scope ="col" class="text-center">Autor</th>
                <th scope ="col" class="text-center">Editorial</th>
                <th scope ="col" class="text-center">Edición</th>
                <th scope ="col" class="text-center">País</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${book.titulo}</td>
                <td>${book.autor}</td>
                <td>${book.editorial}</td>
                <td>${book.edicion}</td>
                <td>${book.pais}</td>
            </tr>
        </tbody>
    </table>
    `;

    document.getElementById("idDivResultado").innerHTML = tblBook;
};

//Asociando funcion que manejara el evento load al cargar la pagina
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}   else if(window.attachEvent) {
    window.attachEvent("onload", iniciar);
}