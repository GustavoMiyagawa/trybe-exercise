//1. Crie um irmão para elementoOndeVoceEsta .
const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
const filho = document.createElement('div');
pai.appendChild(filho);