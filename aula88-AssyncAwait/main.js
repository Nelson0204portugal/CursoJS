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

async function executa(){
    try{
        const fase1 = await esperaAi('fase1',rand());
        console.log(fase1);
        const fase2 = await esperaAi('fase2',rand());
        console.log(fase2);
        const fase3 = await esperaAi('fase3',rand());
        console.log(fase3);
    
    }catch(e){
        console.log(e);
    }
}
executa();
