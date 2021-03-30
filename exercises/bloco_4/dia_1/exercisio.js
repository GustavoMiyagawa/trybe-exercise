//-------------1-------------
let a = 56;
let b = 90;
let c = 0;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//-------------1-------------

//-------------2-------------
if (a > b){
    console.log('Valor', a , 'é maior que', b);
} else{
    console.log('Valor', b , 'é maior que', a);
}
//-------------2-------------

//-------------3-------------
if (a > b && a > c){
    console.log('Valor', a , 'é o maior.');
}
else if (b > a && b > c){
    console.log('Valor', b , 'é o maior.');
}
else {
    console.log('Valor', c , 'é o maior.');
}
//-------------3-------------

//-------------4-------------
if (a >= 0){
    console.log('Valor', a , 'é positivo');
}
else {
    console.log('Valor', a , 'é negativo');
}
//-------------4-------------

//-------------5-------------
if (a > 0 && b > 0 && c > 0 && (a+b+c) === 180){
	console.log('true');
}
else {
    console.log('false', (a+b+c));
}
//-------------5-------------