//filter nao altera o elementor original
//retorna verdadeiro ou falso
const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47}
];
const NomeCincoLetras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(NomeCincoLetras);
const maisCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(maisCinquentaAnos);
const terminaEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaEmA);