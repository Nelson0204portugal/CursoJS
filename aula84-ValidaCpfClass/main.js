class ValidaCPF{
  constructor(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
      writable:false,
      configurable:false,
      enumerable:true,
      value: cpfEnviado.replace(/\D+/g,'')
    });
  }

  isSequence(){
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraNovoCpf(){
    const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos){
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let numero of cpfSemDigitos){
      total += reverso * Number(numero);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }
  valida(){
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
    this.geraNovoCpf();

    
    return this.novoCPF === this.cpfLimpo;
  }

}

const cpf = new ValidaCPF('397.410.618-97');


if(cpf.valida()){
  console.log('CPF VALIDO');
}else{
  console.log('CPF INVALIDO');
}