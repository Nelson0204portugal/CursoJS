// const produto = { nome:'caneca',preco:1.8};
// const outraCoisa = produto; //estao apontando para o mesmo endereço de memoria
// produto.nome = 'Nelson Duarte'; // as duas variaveis mudaram o nome

// //valor independente
// const independente = {...produto};//posso colocar mais objetos, chaves valores
// independente.nome = 'independente produto';
// const assignP= Object.assign({},produto, {material:'porcelana'});
// console.log(produto);
// console.log(independente);
// console.log(assignP);

// const produto = {nome:'Produto',preco:1.8};
// Object.defineProperty(produto,'nome',{
//   value: 'Qualquer outra coisa',
//   writable: false,
//   enumerable: true,
//   configurable: false 
// })
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// produto.nome = 'Outra coisa';
// delete produto.nome;
// console.log(produto);
const produto = {nome:'Produto',preco:1.8};
console.log(Object.entries(produto));

for (let entry of Object.entries(produto)){
  console.log(entry);
}

//destruturing
// for ( let [chave,valor] of Object.entries(produto)){
//   console.log(chave,valor);
// }

for (let valor of Object.entries(produto)){
  console.log(valor[0],valor[1]);
}