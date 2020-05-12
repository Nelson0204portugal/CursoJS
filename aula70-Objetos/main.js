// // const pessoa ={
// //  //{} -> Corpo do objeto
// //   nome: 'Luiz',
// //   sobrenome:'Otávio'
// // };

// // const chave = 'nome';

// // console.log(pessoa.nome,pessoa.sobrenome);
// // //pessoa[chave] = pessoa.nome;
// // console.log(pessoa[chave],pessoa['sobrenome']);

// const pessoa1 = new Object();
// pessoa1.nome = 'Nelson';
// pessoa1.sobrenome = 'Duarte';
// pessoa1.idade = 29;
// pessoa1.falarNome = function(){
//   return (`${this.nome} está falando o seu nome.`);
// };
// pessoa1.getDataNascimento = function(){
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// }
// console.log(pessoa1);

// console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.falarNome());

// for(let chave in pessoa1){
//   console.log(chave);
//   console.log(pessoa1[chave]);
// }

//factory functions / Constructor functions / classes
// function criaPessoa(nome,sobrenome){
//   return{
//     nome, 
//     sobrenome,
//      nomeCompleto(){
//       return `${this.nome} ${this.sobrenome}`;
//     },
//     get fullName(){
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   };
// }

// const p1 = criaPessoa('Nelson','Duarte');
// console.log(p1.nomeCompleto());
// console.log(p1.fullName);

function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
  //posso manipular o objeto antes do this mas nao posso fazer mais nada
}

const p1 = new Pessoa('Nelson','Duarte');
//travei o objeto e nao consigo fazer nada.
// Object.freeze(p1);
const p2 = new Pessoa('Lili','Martins');
console.log(p1);
console.log(p2);
