"use strict";

const $formulario = document.getElementById("formulario");
const $nombre = document.getElementById("nombre");
const $apellidos = document.getElementById("apellidos");
const $correo = document.getElementById("correo");
const $telefono = document.getElementById("telefono");
const $ubicacion = document.getElementById("ubicacion");
const $politica = document.getElementById("politica");
const $validacion = document.getElementById("validacion");
const $lnombre = document.getElementById("lnombre");
const $lapellidos = document.getElementById("lapellidos");
const $lcorreo = document.getElementById("lcorreo");
const $ltelefono = document.getElementById("ltelefono");
const $lubicacion = document.getElementById("lubicacion");


$formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let validacion = "";
    let entrada = false;
    let regexText = /^[A-Za-z]+$/;
    let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let regexNumber = /^\d{10}$/;

    //Validacion del nombre
    if ($nombre.value.length < 3 || !regexText.test($nombre.value)) {
        $nombre.style.outline = "2.5px solid red";
        $lnombre.style.color = "red";
        validacion += "El nombre no es válido <br>";
        entrada = true;
    } else {
        $nombre.style.borderColor = "green";
        $lnombre.style.color = "green";
        let nombre = $nombre.value;
        localStorage.setItem("nombre", nombre);
    }

    //Validacion del apellido
    if ($apellidos.value.length < 3 || !regexText.test($apellidos.value)) {
        $apellidos.style.outline = "2.5px solid red";
        $lapellidos.style.color = "red";
        validacion += "El apellido no es válido <br>";
        entrada = true;
    } else {
        $apellidos.style.outline = "2.5px solid green";
        $lapellidos.style.color = "green";
    }

    //Validacion del correo
    if (!regexEmail.test($correo.value)) {
        $correo.style.outline = "2.5px solid red";
        $lcorreo.style.color = "red";
        validacion += "El correo no es válido <br>";
        entrada = true;
    } else {
        $correo.style.outline = "2.5px solid green";
        $lcorreo.style.color = "green";
        let correo = $correo.value;
        localStorage.setItem("correo", correo);
    }

    //Validacion del celular
    if (!regexNumber.test($telefono.value)) {
        $telefono.style.outline = "2.5px solid red";
        $ltelefono.style.color = "red";
        validacion += "El celular no es válido <br>";
        entrada = true;
    } else {
        $telefono.style.outline = "2.5px solid green";
        $ltelefono.style.color = "green";
    }

    //Validacion de la ubicacion
    if ($ubicacion.value == "") {
        $ubicacion.style.outline = "2.5px solid red";
        $lubicacion.style.color = "red";
        validacion += "Selecciona una ubicación <br>";
        entrada = true;
    } else {
        $ubicacion.style.outline = "2.5px solid green";
        $lubicacion.style.color = "green";
    }

    //Validacion de las politicas de privacidad
    if (!$politica.checked) {
        $politica.style.outline = "1px solid red";
        validacion += "Confirme la política de privacidad";
        entrada = true;
    } else {
        $politica.style.outline = "1px solid green";
    }
    
    //Si la validacion es erronea se le pone un comentario, si es exitosa abre el nuevo html
    if (entrada) {
        $validacion.innerHTML = validacion;
    } else {
        window.location.href = "gracias.html";
    }
});



    // console.log('Nombre:', nombre);
    // console.log('Apellidos:', apellidos);
    // console.log('Correo:', correo);
    // console.log('Teléfono:', telefono);
    // console.log('Ubicación:', ubicacion);
    // console.log('Política:', politica);
