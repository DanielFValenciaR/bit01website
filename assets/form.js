"use strict";

const $suscribirse = document.getElementById("suscribirse");
const $boton = document.getElementById("boton");

// const formulario = {
//     nombre: null,
//     apellidos: null,
//     email: null,
//     telefono: null,
//     ubicacion: null,
// };

$suscribirse.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const politica = document.getElementById('politica').checked;

    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
    console.log('Correo:', correo);
    console.log('Teléfono:', telefono);
    console.log('Ubicación:', ubicacion);
    console.log('Política:', politica);
});

$boton.addEventListener("click", (evento) => {
    evento.preventDefault();
    window.location.href = "gracias.html";
});