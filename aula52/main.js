//a função conhece tudo que esta declarado dentor dela e fora dela
//vai buscar no escopo global

const nome = 'Nelson';
function falaNome(){
    console.log(nome);
}
function usaFalaNome(){
    const nome = 'Duarte';

    falaNome();
}
usaFalaNome();