//função construtora => objetos
//Função fábrica => objetos
//construtora => Precisa iniciar o nome com letra Maiuscula - Pessoa(new)

function Pessoa(nome,sobrenome){
    //atributos privados
    //não estao disponiveis fora da minha função construtora
    const ID = 123456;
    const metodoInterno = ()=>{

    };
    //atributos e metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;




    this.metodo = ()=>{
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Nelson','Duarte');
const p2 = new Pessoa('Liliana','Martins');
p1.metodo();
console.log(p1.nome);

