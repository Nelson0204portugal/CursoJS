// function formaData (data){
//     const dia = data.getDate();
//     let mes = getMes(data.getMonth());
//     const ano = data.getFullYear();
//     const hora = data.getHours();
//     const min = data.getMinutes();
//     let diaSemana = getDiaSemana(data.getDay());

//     return `${diaSemana},${dia} de ${mes} de ${ano}<br> ${hora}:${min}`;
// }

// function getDiaSemana (diaSemana){
//     let diaSemanaTexto;

//     switch (diaSemana){
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = '';
//             return diaSemanaTexto;
//         }
// }

// function getMes (mes){
//     let nomeMes;

//     switch (mes){
//         case 0:
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'Março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'Abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'Maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'Junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'Julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'Dezembro';
//             return nomeMes;
//         default:
//             nomeMes = '';
//             return nomeMes;
//         }
// }
// const data = new Date();
// const Portugal = formaData(data);
// const container = document.querySelector('.container h1');
// container.innerHTML = Portugal;

//procurar no mdn por datestyle
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
};

h1.innerHTML = data.toLocaleDateString('pt-pt', opcoes);
