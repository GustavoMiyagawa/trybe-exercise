//1. Crie um irmão para elementoOndeVoceEsta .
const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
const filho = document.createElement('div');
pai.appendChild(filho);

//2. Crie um filho para elementoOndeVoceEsta.
const ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
ondeVoceEsta.appendChild(filho);

//3. Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filho);
