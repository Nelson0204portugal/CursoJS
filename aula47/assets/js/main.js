function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-PT',{
        hour12:false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timer;
let segundos = 0;

function startWatch(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000);
}

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);    
        startWatch();
    }
    if(elemento.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if(elemento.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
        clearInterval(timer);    
        startWatch();
});

pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
});
