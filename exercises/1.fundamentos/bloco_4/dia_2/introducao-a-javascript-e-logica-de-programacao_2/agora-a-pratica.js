let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//exercício 2
let total = 0;

for (let index = 0; index < numbers.length; index += 1){
    total = total + numbers[index];
}

console.log(total);

//exercício 3
console.log(total / numbers.length);

//exercício 4
if (total / numbers.length > 20){
    console.log('Valor maior que 20.');
}
else {
    console.log('Valor menor que 20.');
}

//exercício 5
let higherNumber = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(higherNumber < numbers[index]){
        higherNumber = numbers[index]
    }
}
console.log(higherNumber);

//exercício 6
let oddNumber = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 1){
        oddNumber += 1;
    }
}

console.log(oddNumber);

// exercício 7
let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if(smallestNumber > numbers[index]){
        smallestNumber = numbers[index]
    }
}
console.log(smallestNumber);

//exercício 8


for (let index = 0; index <= 25; index += 1){
    let numberss = [];
    numberss.push(index);
    console.log(numberss);
}

//exercício 9
for (let index = 0; index <= 25; index += 1){
    let numberss = [];
    numberss.push(index);
    console.log(numberss[index] / 2);
}