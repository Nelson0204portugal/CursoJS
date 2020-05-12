const alunos = ['luiz' , 'Maria' , 'João'];

// push adiciona no final
alunos.push('Otávio');
alunos.push('Nelson');

//adicionar no início
alunos.unshift('Luiza');
alunos.unshift('Liliana');

// Deletar elemento do array -  vai ficar o espaço vazio e não altera o índice
delete alunos[2];
// Remover do array - no final do array
//pode salvar o elemento removido em uma variavel array ou objeto
const removido = [];
removido.push(alunos.pop());

// Remover do array - primeiro elemento do array
//posso também salvar em uma variável array ou objeto
const removidoInicio = [];
removidoInicio.push(alunos.shift());


console.log(removidoInicio);
console.log(removido);
console.log(alunos);



const amigos = ['Zé' , 'Américo' ,'Betinho']

amigos.push('Liliana');
amigos.push('Nelsinho');

console.log(typeof amigos)
console.log( amigos instanceof Array);
console.log(amigos.slice(1, 4));