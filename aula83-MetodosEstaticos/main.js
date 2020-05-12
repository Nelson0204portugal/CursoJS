class ControleRemoto{
  
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  
  //metodo de instancia
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume -= 2;
  }
  //metodo estatico
   static trocaPilha(){
    console.log('ok vou trocar');
   }
}

const controle = new  ControleRemoto('LG');
controle.aumentarVolume();
//metodo estatico eu chamo com a classe
ControleRemoto.trocaPilha();
console.log(controle.volume);