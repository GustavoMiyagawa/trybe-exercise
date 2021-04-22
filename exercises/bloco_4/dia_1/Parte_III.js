let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

//Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail .
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

//1.Crie uma variável chamada base e uma variável chamada altura e atribua os seus respectivos valores: 5 e 8;
let base = 5;
let altura = 8;

//2.Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
let area = base * altura;
console.log('Resultado de área é', area);

//3.Crie uma variável chamada perimetro e atribua a ela a soma de todos os lados do retângulo;
let perimetro;
perimetro = (base * 2) + (altura * 2);
console.log(perimetro, 'm');