// function getCpf(valor){
//   if(typeof valor !== 'string') return 'nao é string';
//   let cpf = valor;
//   let cpfLimpo = cpf.replace(/\D+/g, '');
//   let cpfArray = Array.from(cpfLimpo);
//   return cpfArray;
// }
// let cpf = getCpf('397.410.618-97');
// let cpfSem
// cpf.slice(0,-2);
// console.log(cpf.slice(0,-2));


function ValidaCpf(cpfEnviado){
Object.defineProperty(this, 'cpfLimpo', {
  enumerable:true,
  get: function(){
    return cpfEnviado.replace(/\D+/g, ''); 
  }
});
}

//retorna verdadeiro ou falso
ValidaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length > 11 ) return false;
  if(this.isSequencia()) return false;
  
  const cpfParcial = this.cpfLimpo.slice(0,-2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  
  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1 ;
  const total = cpfArray.reduce((ac,valor) =>{
    ac += regressivo * Number(valor);
    regressivo--;
    return ac;
  },0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};
ValidaCpf.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
  
};
const cpf = new ValidaCpf('397.410.618-97');

if(cpf.valida()){
  console.log('cpf Válido');
}else{
  console.log('cpf Inválido');
}