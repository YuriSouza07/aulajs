/*Monte um programa para ler um valor e verificar
se esse valor é um número par ou ímpar
*/
let valor = Number(prompt('Digite o valor'))
let x = (valor % 2)

if (x == 0) {
    document.write('Esse valor é par');
} else {
document.write('Esse valor é impar');
}