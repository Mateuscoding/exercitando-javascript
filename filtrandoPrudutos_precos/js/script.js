let produtos = [

    {name: 'Boneco do Naruto', moeda: 'R$', preco: '80'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '1500'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '500'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '1000'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '2000'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '100'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '200'},
    {name: 'Boneco do Naruto', moeda: 'R$', preco: '50'}

]

let produtosContainer = document.getElementById('produtos')
  
function updateElementos(array){

        produtosContainer.innerHTML = ''

        for(let i = 0; i < array.length; i++){
            
            produtosContainer.innerHTML += `
            <div class="produto">
               <div class="imagem-produto">
                 <img src="./assets/naruto.jpg" alt="boneco_do_naruto">
               </div>
               <div class="info">
                <p class="nome">${array[i].name}</p>
                <p class="moeda"">${array[i].moeda}</p>
                <p class="preco">${array[i].preco}</p>
               </div>
            </div>`       
        }
}

updateElementos(produtos)

function dezAcem(colecao){
    return colecao.preco >= 10 && colecao.preco <= 100;
}

function cemAmil(colecao){
    return colecao.preco >= 100 && colecao.preco <= 1000;
}

function milAdezmil(colecao){
    return colecao.preco >= 1000 && colecao.preco <= 10000
}

function personalizado(colecao){
    let valorInicial = document.querySelector('#valor-inicial').value
    let valorFinal = document.querySelector('#valor-final').value

    return colecao.preco >= parseInt(valorInicial) && colecao.preco <= parseInt(valorFinal);    
}


function filtrarPreco(valorInicial){

    if(valorInicial == 10){
        let filtrados = produtos.filter(dezAcem)
        updateElementos(filtrados)
    }else if(valorInicial == 100){
        let filtrados = produtos.filter(cemAmil)
        updateElementos(filtrados)
    }else if(valorInicial == 1000){
        let filtrados = produtos.filter(milAdezmil)
        updateElementos(filtrados)
    }
}

function filtrarPersonalizado(){

    let filtrados = produtos.filter(personalizado)

    console.log(filtrados)
    updateElementos(filtrados)
}