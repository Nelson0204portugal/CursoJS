const frutas =['Maçã' , 'Pera' , 'Uva'];
// for in lê os indices ou chaves do objetos
for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa ={
    nome: 'Nelson',
    sobrenome : 'Duarte',
    idade: 28
};

for (let chave in pessoa){
    console.log(chave.toUpperCase(), pessoa[chave]);
}