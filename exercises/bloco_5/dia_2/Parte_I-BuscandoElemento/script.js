//1. Acesse o elemento elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta'));

//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
pai.style.backgroundColor = 'red';

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerText = 'primeiroFilhoDoFilho';