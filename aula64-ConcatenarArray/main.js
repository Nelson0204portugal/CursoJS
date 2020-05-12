const a1= [1,2,3];
const a2 = [4,5,6];
const concatenacao = a2.concat(a2,[7,8,9],'Nelson');
//spread operator -> o array [7,8,9] fica sem os []
const a3 = [...a1,...a2,...[7,8,9]];
console.log(concatenacao);
console.log(a3);

