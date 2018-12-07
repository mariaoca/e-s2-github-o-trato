//escribir en input usuaria de github

//seleccionar solo nombre sin apellidos
//escribir letra de nombre en un lista ordenada
const nick = document.querySelector('.main_input');
const btn = document.querySelector('.main_btn');
const writeName = document.querySelector ('.result');

// function () {
//    //recoger nick de usuaria 
// }

//pulsar boton buscar y encontrar nombre (peticion al servidor)

function find() {
    fetch('https://api.github.com/users/')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        writeName.innerHTML = data.name;

    });
}
