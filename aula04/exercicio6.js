/*6.   Verificar se um número está entre 10 e 20 
Crie um programa que leia um número inteiro e verifique
se ele está dentro do intervalo de 10 a 20 (inclusive).
Se o número estiver dentro do intervalo,
mprima "Número dentro do intervalo", caso contrário,
 imprima "Número fora do intervalo". 
 */
 let numero = parseInt(prompt("Digite um número de 10 a 20:")); 
 if (numero >= 10 && numero <= 20) { 
    console.log("Número dentro do intervalo"); 
 } else { 
   console.log("Número fora do intervalo"); 
 } 