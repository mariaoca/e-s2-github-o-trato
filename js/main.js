
'use strict';
//escribir en input usuaria de github
const nick = document.querySelector('.main_input');
const btn = document.querySelector('.main_btn');
const writeName = document.querySelector ('.result');
const ol = document.querySelector('.list__name');

function getNick () {
   const name = nick.value;
   find(name);
}
btn.addEventListener('click',getNick);

//pulsar boton buscar y encontrar nombre (peticion al servidor)

function find(nickName) {
    fetch('https://api.github.com/users/' + nickName)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        const nameGit = data.name;
        const arrayName = nameGit.split(' ');
        const separation = arrayName[0].split('');
      
        let list = '';
        for (let i= 0; i< separation.length;i++){
            const li = `<li>${separation[i]}</li>`;
            list = list + li;
    
        }
        console.log(list)
        ol.innerHTML = list;

    });
}
//escribir letra de nombre en un lista ordenada




