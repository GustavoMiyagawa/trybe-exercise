let seletorBody = document.querySelector('body');
let titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript Dom';
seletorBody.appendChild(titleH1);

let divCreator = document.createElement('div');
divCreator.className = '.main-content';
seletorBody.appendChild(divCreator);

let divFilho = document.createElement('div');
divFilho.className = 'center-content';
divCreator.appendChild(divFilho);

let tagP = document.createElement('p');
tagP.innerText = 'Fazendo um teste com o parágrafo.';
divFilho.appendChild(tagP);

let divFilha = document.createElement('div')
divFilha.className = 'left-content';
divCreator.appendChild(divFilha);

let divFilha2 = document.createElement('div')
divFilha2.className = 'right-content';
divCreator.appendChild(divFilha2);