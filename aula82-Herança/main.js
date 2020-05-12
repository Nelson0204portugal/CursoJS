class DispositivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(this.nome + 'dispositivo ja ligado');
      return;
    }
    return this.ligado=true;
  }
  
  desligado(){
    if(!this.ligado){
      console.log(this.nome + ' dispositivo ja desligado');
      return;
    }
    return this.ligado=false;
  }
}

class Smartphone extends DispositivoEletronico{
  constructor(nome,cor,modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico{
  constructor(nome,wifi){
    super(nome);
    this.wifi = wifi;
  }

  ligar(){
    console.log('alterou o metodo ligar');
  }
}
const s1 = new Smartphone('iphone','preto','galaxy s10');
const t1 = new Tablet('ipad',true);
console.log(s1);
t1.ligar();
console.log(t1);