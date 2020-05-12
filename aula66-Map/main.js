// Função map retorna o array do mesmo tamanho e nao altera o original
// retorna o array com valores diferentes

// const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27];
// const dobro = numeros.map((valor,indice,array) => valor * 2);
// const comNome = numeros.map((valor,indice,array) => `Nelson ${valor}`);
// console.log(dobro);
// console.log(comNome);


//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto



/*Objeto é passado por referencia tenho q tomar cuidado para nao alterar o objeto*/ 
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47}
];

const retornaString = pessoas.map(obj => obj.nome);
const retornaObjetoNovoSemNome = pessoas.map(obj => ({idade: obj.idade}));
const retornaComId = pessoas.map((obj,indice) => {
    const newObj = {...obj};
    newObj.id = ++indice;
    return newObj;
    });
console.log(retornaString);
console.log(retornaObjetoNovoSemNome);
console.log(retornaComId);
console.log(pessoas);
