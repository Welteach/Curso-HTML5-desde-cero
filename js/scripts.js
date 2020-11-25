var imagen;

function ejecuta(){/*
    for(var i=0; i<3; i++){
        document.getElementsByTagName('p')[i].onclick = saludo;
    }
    document.getElementById('funcion').onclick = saludo;

    document.getElementsByClassName('funcion')[1].onclick = saludo;
    */

    // document.querySelector('.funcion').onclick = saludo;

    // document.querySelector('#principal p:last-child').onclick = saludo;
    /*
    var elementos = document.querySelectorAll('#principal p');

    for(var i=0; i<elementos.length; i++){
        elementos[i].onclick = saludo;
    }
    */
    /*
    imagen = document.getElementsByTagName('img')[0];
    /*
    imagen.addEventListener('click', saludo, false);
    */
/*
    imagen.addEventListener('mouseover', crecer, false);
    imagen.addEventListener('mouseout', reestablecer, false);*/

}

function crecer(){
    imagen.width = 350;
    imagen.height = 250;
}

function reestablecer(){
    imagen.width = 800;
    imagen.height = 504;
}

function eventos(){
    var elemento1 = document.getElementsByTagName('p')[0];
    var elemento2 = document.getElementsByTagName('img')[0];

    elemento1.addEventListener('click', aviso2, true);
    elemento2.addEventListener('click', aviso1, false);
}

function aviso1(){
    alert('Hola soy la imagen');
}

function aviso2(){
    alert('Hola soy el párrafo');
}

function saludo(){
    alert('Hola Mundo!');
}

window.onload = eventos;
