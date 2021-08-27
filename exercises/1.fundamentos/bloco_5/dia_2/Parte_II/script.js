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

//4. A partir desse filho criado, acesse terceiroFilho.
document.querySelector('#primeiroFilhoDoFilho').firstChild.id = 'primeiroFilhoDoFilhoDoFilho'
const primeiroFilhoDoFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilhoDoFilho');
primeiroFilhoDoFilhoDoFilho.parentNode.parentNode.nextSibling.nextSibling

const divs = document.querySelectorAll('div');

for (let index = 0; index < divs.length; index += 1){
  if (divs[index].id != 'pai' || divs[index].id != 'elementoOndeVoceEsta' || divs[index].id != 'primeiroFilhoDoFilho'){
    divs[0].remove();
  }
}
