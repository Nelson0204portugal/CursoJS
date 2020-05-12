//função não toca no escopo global
(function(idade,peso,altura){
    const sobrenome = 'Duarte';
function falaOi(nome){
    return nome + ' ' +sobrenome;
}
function falaNome(){
    console.log(falaOi('Nelson'));

}
falaNome();
console.log(idade,peso,altura);
})(30,80,1.80);
