//-------------1-------------
let a = 1;
let b = 1;
let c = 1;

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

//-------------6-------------
let pieceChess = 'QueEn';

let piece= pieceChess.toLowerCase();

switch (piece){
    case "king":
        console.log(piece, '--> one square in any direction');
        break

    case "queen":
        console.log(piece, '--> diagonally, horizontally or vertically any direction.');
        break
    
    case "rook":
        console.log(piece, '--> horizontally or vertically');
        break

    case "bishop":
        console.log(piece, '--> diagonally');
        break

    case "knight":
        console.log(piece, '--> in a L shape, two square in a horizontally or vertical direction');
        
    case "pawn":
        console.log(piece, '--> vertically forward one square');
        break
    
    default:
        console.log('peça inválida');
}
//-------------6-------------

//-------------7-------------
let percentGrade = 89;
let grade;

if (percentGrade >= 90 && percentGrade <= 100){
    grade = 'A';
    console.log('Nota', grade);
}
else if (percentGrade >= 80 && percentGrade < 90){
    grade = 'B';
    console.log('Nota', grade);
}
else if (percentGrade >= 70 && percentGrade < 80){
    grade = 'C';
    console.log('Nota', grade);
}
else if (percentGrade >= 60 && percentGrade < 70){
    grade = 'D';
    console.log('Nota', grade);
}
else if (percentGrade >= 50 && percentGrade < 60){
    grade = 'E';
    console.log('Nota', grade);
}
else if (percentGrade >= 0 && percentGrade < 50){
    grade = 'F';
    console.log('Nota', grade);
}
else {
    console.log('Valor inválido.');
}
//-------------7-------------

//-------------8-------------
let tF;
if ((a % 2 === 0) || (b % 2 === 0)  ||(c % 2 === 0)){
    tF = true;
    console.log(tF);
}
else {
    tF = false;
    console.log(tF);
}
//-------------8-------------

//-------------9-------------
let fT
if ((a % 2 === 1) || (b % 2 === 1)  ||(c % 2 === 1)){
    fT = true;
    console.log(fT);
}
else {
    fT = false;
    console.log(fT);
}
//-------------9-------------

//-------------10-------------
let productCost = 0;
let saleValue = 10;
let tax = 0.20;
let quantily = 2;
let totalCost = productCost + (productCost * tax);



if (productCost <= 0 || saleValue <= 0){
    console.log('Não pode ter valores igual a zero.');
}
else {
    console.log('Lucro total',(saleValue - totalCost) * quantily);
}
//-------------10-------------

//-------------11-------------
let salary = 3000;
let inss;
let ir;

if (salary <= 1556.94){
    inss = salary - (salary * 0.08);
}
else if (salary > 1556.95 && salary < 2594.92){
    inss = salary - (salary * 0.09);
}
else if (salary > 2594.93 && salary < 5189.82){
    inss = salary - (salary * 0.11);
}
else {
    inss = salary - 570.88;
}
console.log(inss)

if (inss < 1903.98){
    ir = 0;
}
else if(inss > 1903.99 && inss < 2826.65){
    ir = (inss * 0.075)- 142.80;
}
else if(inss > 2826.66 && inss < 3751.05){
    ir = (inss * 0.15) - 354.80;
}
else if(inss > 3751.06 && inss < 4664.68){
    ir = (inss * 0.225) - 636.13;
}
else {
    ir = (inss * 0.275) - 869.36
}

console.log(ir);
console.log(inss - ir);
//-------------11-------------