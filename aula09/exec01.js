/*Crie um programa que sorteia um número entre 1 e 100. Se for par,
exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar"
*/
let valor = (Math.floor(Math.random() * 100) + 1);
if (valor % 2 == 0){
    alert('Numero ' + valor + ' é par');
} else {
    alert('Numero ' + valor + ' é impar');

}