//symbol gera gera sempre de forma diferente 
const _velocidade = Symbol();
class Carro {
  constructor(nome){
    this.nome = nome;
    //propriedade privada
    this[_velocidade] = 0;
  }
  set velocidade(valor){
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;

    this[_velocidade] = valor;
  } 
  get velocidade(){
    return this[_velocidade];
  }
  acelerar (){
    if(this[_velocidade] >=100){
      return;
    }
    this[_velocidade]++;
  }
  travar (){
    if(this[_velocidade] <= 0){
      return;
    }
    this[_velocidade]--;
  }
}

const c1 = new Carro('fusca');
c1.velocidade = 2000;

for(let i=0; i<= 200; i++){
  c1.acelerar();
};

c1.velocidade = 80;
console.log(c1.velocidade);