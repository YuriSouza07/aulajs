/*1. Verificar o Dia da Semana 
Crie um programa que receba um número de 1 a 7 e retorne
 o dia correspondente da semana.
Por exemplo, 1 para "Domingo", 2 para "Segunda-feira"
 e assim por diante. 
*/
let numero = parseInt(prompt("Digite um número de 1 a 7:"));
switch (numero){
    case 1: 
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log('Dia Invalido');
        break;
}