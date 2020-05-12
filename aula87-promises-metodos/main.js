function rand(min = 1,max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

function esperaAi(msg,tempo){
    return new Promise((resolve, reject) => {
       
        setTimeout( () => {
            if(typeof msg !== 'string'){
                reject(false);
                return;
            } 
            resolve(msg.toUpperCase() + ' - Passei por aqui');
        }, tempo);
    });
}

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
        return Promise.reject('rejeitado');
    }else{
        return esperaAi('Baixei a página',rand());
    }
}


baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('Erro: ', e));


// Promise.all , Promise.race, Promise.resolve, Promise.reject
const promises = [
    
    esperaAi('promise 1', rand()),
    esperaAi('promise 2', rand()),
    esperaAi('promise 3', rand()),
    
]

//retorna a primeira promessa reoslvida
//se nao tiver promessa, irá ser resolvido primeiro
Promise.all(promises)
    .then(valor => {
        console.log(valor);
    }).catch(erro => console.log(erro));

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    }).catch(erro => console.log(erro));