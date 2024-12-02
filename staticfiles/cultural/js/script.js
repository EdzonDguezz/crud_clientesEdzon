// Cambiar el header cuando el usuario haga scroll
//Document hace referencia a nuestro html, en este caso solo usaremos header y para eso es la funcion queryselector
const header = document.querySelector("header");
//Addeventlistener agrega un escuchador de eventos que ocurran en la ventana, en este caso scroll, la funcion hara
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY>60)
    // Si el scroll es mayor a 60 pone la clase sticky, de lo contrario la quita
})
/*
//Mostrar un mensaje de alerta cuando haga click en el boton

document.querySelector('.btn').addEventListener('click', function(){
    alert('¡Tu fecha para el evento ha sido registrada');
});

//Aplicar a todos los botones de clase .btn
document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('¡Tu fecha para el evento ha sido registrada!');
    });
});
*/
// Funcion para el primer boton
document.getElementById("btn-inicio").addEventListener('click', function(){
    alert('¡Tu fecha para el evento ha sido registrada');
})

//Funcion segundo boton
document.getElementById("btn-info").addEventListener('click', function(){
    alert('¡Tu fecha para el evento ha sido registrada');
})


// Seleccionar todos los enlaces dentro de la clase .navbar
document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault(); // Prevenir comportamiento por defecto del enlace
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'instant'

        })
    })
})

// Cambiar la imagen de fondo caada n segundos
const imagenes = [
    '/static/cultural/IMG/fotdos.jpg',
    '/static/cultural/IMG/fotuno.jpg',
    '/static/cultural/IMG/fotres.jpg',
    '/static/cultural/IMG/fotcuatro.jpg',
    '/static/cultural/IMG/fotcinco.jpg'
];
const homeSection = document.querySelector('.home');
const intervalo = 5000; // 5000 ms = 5 s
let indiceImagen = 0;
function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
                                rgba(236, 131, 222, 0.6),
                                rgba(202, 132, 211, 0.3)
    ), url(${imagenes[indiceImagen]}) `;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}
setInterval(cambiarFondo, intervalo);

//Mostrar menú en pantallas pequeñas

let menu = document.querySelector('#menu_icon'); // Busca el elemento menu icon y lo guarda en menu
let navbar =document.querySelector('.navbar'); //Lo mismo busca y guarda
let enlaces= document.querySelectorAll('.navbar a');


//Vamos a captar onclick sobre menu, solo en el caso de un click

menu.onclick= () =>{
    navbar.classList.toggle('open'); //Reacciona al click y quita o pone open a nav
    menu.classList.toggle('bx-x');
}

enlaces.forEach(link =>{
    link.onclick=()=>{
    navbar.classList.remove('open'); //Quitamos estas clases cuando haga el click
    menu.classList.remove('bx-x');
    }
})
//Animacion de texto
//Los string son los otros mensajes que saldran
//Typespeed es la velocidad
//loop para que se reproduzca continuamente
//showcursor mostrar cursor
//cursorchar tipo de cursor
//backspeed velocidad a la que borrara los caracteres
var typed = new Typed('#typed',{
    strings: ['Todos los dias', 'Apoyanos', 'Promueve la cultura'],
    typeSpeed:50,
    loop: "true",
    showCursor: "true",
    cursorChar:"_",
    backSpeed: 20,
})

var typedd = new Typed('#typedd',{
    strings: ['Conocenos', 'Diviertete', 'Promueve la cultura'],
    typeSpeed:50,
    loop: "true",
    showCursor: "true",
    cursorChar:"_",
    backSpeed: 50,
})

