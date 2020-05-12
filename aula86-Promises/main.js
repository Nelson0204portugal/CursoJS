function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}
/*
//funcção com callback
function esperaAi(msg,tempo,cb){
    setTimeout(()=>{
        console.log(msg);
        if(cb) cb();
    },tempo);
}

//callbacks
esperaAi('frase1', rand(1,3),function(){
    esperaAi('frase2', rand(1,3),function(){
        esperaAi('frase3', rand(1,3));
    });
});*/
function esperaAi(msg,tempo){
    //construtor promise
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout( () => {
            resolve(msg);
        }, tempo);
    });
}
esperaAi('frase 1',(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 2',rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(123,rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log ('Erro:',e);
    }
        );