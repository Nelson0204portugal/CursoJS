//Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () =>'ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}
//Simplesmente o arrow function para funções de um objeto prototype não mantém estado após instanciado. O ideal nesse caso é manter a declaração de function normal:
Pessoa.prototype.nomeCompleto = function(){
return   this.nome + ' ' + this.sobrenome;
}
//instância
const pessoa1 = new Pessoa('Nelson','Duarte');
const pessoa2 = new Pessoa('Liliana','Martins');
const data = new Date();
console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
