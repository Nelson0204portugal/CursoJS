function retornaFuncao(nome){
    // const nome = 'Nelson';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Nelson');
console.dir(funcao);