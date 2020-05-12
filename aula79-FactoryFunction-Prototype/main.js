const falar= {
  falar(){
    console.log(`${this.nome} está falando!`);
  }
};
const comer= {
  comer(){
    console.log(`${this.nome} está comendo!`);
  }
};

//spread operator
// let pessoaPrototype = {...falar};
//com metodod Object.assign
pessoaPrototype = Object.assign({},comer);

function criaPessoa(nome,sobrenome){
  
  //prototype
  // const pessoaPrototype = {
  //   falar(){
  //     console.log(`${this.nome} está falando!`);
  //   }
  // };

  return Object.create(pessoaPrototype,{
    //posso fazer uq eu quiser
    //get e set por exemplo
    nome:{value: nome},
    sobrenome:{value: sobrenome}
  });
}

const p1 = criaPessoa('Nelson','Duarte');
console.log(p1);