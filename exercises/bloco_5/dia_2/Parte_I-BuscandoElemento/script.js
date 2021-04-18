//1. Acesse o elemento elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta'));

//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.querySelector('#elementoOndeVoceEsta').parentNode;
pai.style.backgroundColor = 'red';

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerText = 'primeiroFilhoDoFilho';

//4. Acesse o primeiroFilho a partir de pai.
document.querySelector('#pai').firstChild;

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').previousElementSibling

//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
//8. Agora acesse o terceiroFilho a partir de pai .
