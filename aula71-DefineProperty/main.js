function Produto(nome,preco,estoque){
  this.nome = nome;
  this.preco = preco;

Object.defineProperty(this, 'estoque',{
  enumerable:true, //mostra a chave
  writable:true, // controla ou nao se pode ser alterado
  configurable:true, // pode apagar ou nao, reconfigurar ou nao
  value:estoque // valor
});
// Object.defineProperty(this, 'estoque',{
//   enumerable:true, //mostra a chave
//   writable:true, // controla ou nao se pode ser alterado
//   configurable:true, // pode apagar ou nao, reconfigurar ou nao
//   value:function(){
//     return estoque;
//   } 
// });
Object.defineProperties(this,{
  nome:{
    enumerable:true, //mostra a chave
  writable:true, // controla ou nao se pode ser alterado
  configurable:true, // pode apagar ou nao, reconfigurar ou nao
  value:nome // valor
  },
  preco:{
    enumerable:true, //mostra a chave
  writable:true, // controla ou nao se pode ser alterado
  configurable:true, // pode apagar ou nao, reconfigurar ou nao
  value:preco // valor
  },
});
}

const p1 = new Produto('camista',20,3);
p1.estoque = 10000;
//retorna um array com as chaves do objeto
console.log(Object.keys(p1));
//retorna os valores em um array
console.log(Object.values(p1));
//retorna um array com cada chave e valor dentro de array
// [ [ 'nome', 'camista' ], [ 'preco', 20 ], [ 'estoque', 10000 ] ]
console.log(Object.entries(p1));
console.log(p1);

for(let chave in p1){
  console.log(chave);
}