const listaDeTeclas = document.querySelectorAll('.tecla')


function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`
    
    tecla.onclick = function(){
        playSonido(idAudio);
    };   

    //Activar teclado con enter y espacio
    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
    
}






