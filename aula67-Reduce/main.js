//reduce consegue fazer map e filter
//reduce é para reduzir um array para um unico elemento
//nao é ideal utilizar o reduce para fazer filter e map

//acumulador se nao for passado nada, começa com o indice 0

const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador,valor,indice,array){
//     acumulador += valor;
//     return acumulador;
// }, 0);

//com array com numeros pares (facilmente faria com o filter)
const total = numeros.reduce(function(acumulador,valor,indice,array){
    if(valor % 2 === 0) acumulador += valor;
    return acumulador;
    // se nao passar o valor do acumulador, o valor irá dar diferente
    //sem o valor do acumulador, o valor do acumulador é do indice 0
    //sem o acumulador o valor total é 167
    // com o valor do acumulador o valor da 162
});
// console.log(total);


//retorne a pessoa mais velha
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:99},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47}
];
const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

