/*Número Aleatório Dentro de um Intervalo 
Crie um programa que solicita ao usuário dois números (mínimo e máximo)
e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela. 
*/
let min = parseInt(prompt('Informe o valor mínimo: '));
let max = parseInt(prompt('Informe o valor máximo: '));
let valor = (Math.floor(Math.random() * (max - min + 1)) + min);
alert('O valor sorteado foi: ' + valor);
