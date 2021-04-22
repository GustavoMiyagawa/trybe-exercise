//1.Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
let status = 'Lista';
//2.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

switch (status){
    case "Aprovada":
        console.log("Nota maior que 80, aprovado(a).");
        break

    case "Lista":
        console.log("Nota menor que 80 e maior que 60, lista de espera.");
        break
    
    case "Reprovada":
        console.log("Nota menor que 60, reprovado(a).");
        break
    
    default:
        console.log("Não se aplica.");
}