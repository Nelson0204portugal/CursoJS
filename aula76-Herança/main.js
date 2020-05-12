//Produto -> aumento de preco e desconto
// Camiseta = cor,Caneca = plastico | porcelana (material)

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}
//funcões da função construtora com prototype
Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this,nome,preco);
}
Camiseta.prototype = Object.create(Produto.prototype); 
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material,estoque){
  Produto.call(this,nome,preco);

  this.material = material;

  Object.defineProperty(this,'estoque',{
    enumerable:true,
    configurable:false,
    get:function(){
      return estoque;
    },
    set:function(valor){
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca ('Caneca', 20,'Plástico',5);
const camiseta = new Camiseta('regata',7.5,'preto');
camiseta.aumento(10);
caneca.estoque = 100;
console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);