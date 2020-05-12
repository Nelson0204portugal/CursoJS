const nome = ['Luiz Otávio','Nelson'];

// for classico
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// retorna o indice
for(let i in nome){
    console.log(nome[i]);
}
// retorna o valor e nao o indice
for(let valor of nome){
console.log(valor);
}

nome.forEach(function(elemento,indice){
    console.log(elemento);
});