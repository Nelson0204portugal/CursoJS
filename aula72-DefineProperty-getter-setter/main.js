function Produto(nome,preco,estoque){
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

Object.defineProperty(this, 'estoque',{
  enumerable:true,
  configurable:true,
  get: function(){
    return estoquePrivado;
  },
  set:function(valor){
    //criar variavel let para trabalhar com o atributo criado
    if(typeof valor !== 'number'){
      throw new TypeError('mensagem');
    }
    estoquePrivado = valor;
  }

  // writable:true, 
  // value:estoque 
});

}
const p1 = new Produto('camiseta',20,3);
console.log(p1);
//para ver o getter
console.log(p1.estoque);
//setter
// p1.estoque = 'Valor que eu quero';
p1.estoque = 500;
// p1.estoque ='nome';
console.log(p1.estoque);

function criaProduto(nome){
  return{
    get nome(){
      return nome;
    },
    set nome(valor){
      valor = valor.replace('coisa', '');
      nome = valor;
    }
    
  };
}

const p2 = criaProduto('calça');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);