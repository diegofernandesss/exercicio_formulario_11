//Importa o caminho que se encontra dentro do diretório model os arquivos .js (dataset.js e o foods.js).

import itens from './model/dataset.js';
import foodsModel from './model/foods.js';


// Acessa os itens por meio de um load que se encontra dentro do arquivo foods.js
foodsModel.load(itens);

// Atribuição de uma variável let foods vai ler o arquivo inteiro do food.js construindo o valor ou um objeto JavaScript descrito pela string JSON.
let foods = foodsModel.readAll();

//Função que inicia os registros salvos dos cards do cardápio que são estilizados pelo bootstrap, pois inicicam quando a página é carregada.

function initFoodsCard () {
  
  // Percorre o laço que se encontra dentro de foods os registros salvos do formulário.
  for (let item of foods) {

    // Atribuição da variável para criação de um novo item do cardapio, gerado pelo HTML de forma dinâmica pelo bootstrap. Preenchendo a imagem, id e description.

    const view = createFoodCardItem(item);

    /**
     * É armazenado dentro da variável o elemento id do arquivo.html. Com isso, é possível adicionar um novo elemento dentro da tag <div>
     */

    //let itensCardapio = document.querySelector('.itens-cardapio');
    let itensCardapio = document.getElementById("itens-cardapio");
    
    /**
     * Analisa o texto especifico do texto como html e xml e insere os nós que resultam na árvore DOM em uma posição especifica. Nesse caso, insere um nó dentro do elemento, depois de seu último filho que no caso é um novo elemento view.
     */

    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}


// Função  que faz toda dinâmica do bootstrap para o preenchimento dos itens do cardápio. Recebe os elementos e retorna através do html em uma tag div com preenchimento do Id, nome, description.

function createFoodCardItem (item) {

    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                      <h4 class="card-price">${item.price.toLocaleString('pt-br',{style:'currency', currency: 'BRL' })}</h4>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

    //Retorna a estrutura desenvolvida no html
    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');

// O formulário de cadastro do modal do cardápio é atribuido através da variável const FoodForm.
const foodForm = document.getElementById("foodForm");

// A função atribuida captura o evento com onsubmit, inseridos nos inputs pelo modal do cardápio e adicionado pelo botão "Adiconar" do formulário modal.

foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.

  // O método preventDefault() cancela o evento se for cancelado, o que significa que a ação padrão que pertence ao evento não ocorrerá.
  
  event.preventDefault();


  /**
   * A variável foi atribuida com o objetivo de transformar uma lista em pares de valor-chave em um objeto utilizando o Object.fromEntries que são representadas pelos campos de um elemento. Os dados são enviados entre valor-chave que possibilita uma fácil manipulação.
   * A FormData() fornece uma maneira de construir pares chave/valor que são representadas pelos campos de um elemento form e seus valores.
   */

  let newFood = Object.fromEntries(new FormData(foodForm));

  // Quando já estão tratados com valor-chave, é possível uma criação do módulo foods. Possibilitando em criar um novo item que vai íncluido dentro da array. 


  foodsModel.create(newFood);

  // Atribuição da variável para criação de um novo item do cardapio, gerado pelo HTML de forma dinâmica pelo bootstrap. Preenchendo a imagem, id e description.

  const foodCard = createFoodCardItem(newFood);
  /**
   * É armazenado dentro da variável o elemento id do arquivo.html. Com isso, é possível adicionar um novo elemento dentro da tag <div>
   */


  let itensCardapio = document.getElementById("itens-cardapio");
  /**
   * Analisa o texto especifico do texto como html e xml e insere os nós que resultam na árvore DOM em uma posição especifica. Nesse caso, insere um nó dentro do elemento, depois de seu último filho que no caso é um novo elemento foodCard.
   */
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);

  foodForm.reset();
}


initFoodsCard();