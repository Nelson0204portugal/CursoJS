function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function(valor){
  if(this.saldo < valor){
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  } 
  this.saldo -= valor;
  
};
Conta.prototype.depositar = function(valor){
   this.saldo += valor;
   this.verSaldo();
};
Conta.prototype.verSaldo = function(){
  console.log(`Agencia: ${this.agencia} / Conta: ${this.conta} = ${this.saldo}`);
};

function CC(agencia, conta, saldo, limite){
  Conta.call(this,agencia,conta,saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;
CC.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)){
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  } 
  this.saldo -= valor;
  this.verSaldo();
};
//nao tem limite
function CP(agencia, conta, saldo){
  Conta.call(this,agencia,conta,saldo);
  
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CC;

const conta = new Conta(8536, 3974, 100);
const cc = new CC(8536, 3974, 100,200);
const cp = new CP(8536, 3974, 100);

