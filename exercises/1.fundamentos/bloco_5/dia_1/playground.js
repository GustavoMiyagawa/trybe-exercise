function formatarNumeroDeTelefone(fone) {
  let str = fone.toString();
  let numbers = str.replace(/,/g, '');
  let result = `(${numbers.substr(0, 2)})${numbers.substr(2, 5)}-${numbers.substr(7, 10)}`;
  return result;
}

function verificarNumeroRepetido(array) { 
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
    let referencia = array[index];
    for (index = 0; index;){}
    if (referencia === array[index]){
      cont += 1;
    }
  }
  return cont;
}

//console.log(verificarNumeroRepetido([1, 1, 2, 4]));

function countItems(arr) {
  const countMap = Object.create(null);

  for (const element of arr) {
    if (!countMap[element]) {
      // Se ainda não existir elemento, definimos como um, já que
      // estamos na primeira ocorrência.
      countMap[element] = 1;
    } else {
      // Caso contrário, incrementamos um no número atual.
      countMap[element] += 1;
    }
  }
  
  return countMap;
}

const arr = ['1', '1', '2', '2', '2'];
console.log(countItems(arr));