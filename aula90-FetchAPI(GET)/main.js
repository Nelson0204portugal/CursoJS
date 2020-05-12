// const request = obj => {
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();
//     xhr.open(obj.method,obj.url,true);
//     xhr.send();
//     xhr.addEventListener('load',()=>{
//         if(xhr.status >= 200 && xhr.status < 300){
//            resolve(xhr.responseText);
//         }else{
//             reject({
//                 code: xhr.status,
//                 msg: xhr.statusText
//             })
//         }
//     })
//     })
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
    e.preventDefault();
        carregaPagina(el);
    }
});
// async function carregaPagina(el){
//     const href = el.getAttribute('href');
//     try{
//       const response = await request({
//             method: 'GET',
//             url: href
//         });
//         carregaResultado(response);
//     }catch (e){
//         console.log(e);
//     }
// }
async function carregaPagina(el){
    try{
        const href=el.getAttribute('href');

        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Erro 404!');
        
        const html = await response.text();
        
        carregaResultado(html);
    
    }catch(e){
        console.error(e);
    }
    
    // fetch(href)
    // .then(response => {
    //     //estou assumindo o erro 404 mas pode ser qualquer erro
    //     if(response.status !== 200) throw new Error('Erro 404!');
    //     return response.text()
    // })
    // .then(html => {
    //     carregaResultado(html);
    // })
    // .catch(e => console.log(e));
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


//carregar o conteudo da pagina 1
//fetch ja retorna por padrao uma promise
