/*7. Verificar se um número está dentro de dois intervalos 
Crie um programa que leia um número inteiro e verifique se ele está
dentro de dois intervalos: 
Entre 1 e 10 (inclusive) 
Entre 50 e 100 (inclusive). 
Imprima "Número válido" se o número estiver em qualquer um desses intervalos,
caso contrário, imprima "Número inválido". 
*/ 
let num1 = parseInt(prompt('Digite um número'));

if (num1 >= 1 && num1 <= 10){
    console.log('Número dentro do intervalo de 1 a 10'); 
} else if (num1 >= 50 && num1 <= 100) { 
    console.log('Número dentro do intervalo de 50 a 100'); 
 } else { 
   console.log('Número fora do intervalo'); 
 }