/* 2. Calculadora Simples 
Crie um programa que recebe dois números e uma operação
(+, -, *, /) e retorna o resultado correspondente.
*/
let n1 = Number(prompt('Digite o primeiro número:'));
let n2 = Number(prompt('Digite o segundo nímero'));
let operador = prompt('qual operação? + - * /');
if (operador=='+') {
    console.log(n1 + n2)
} else if (operador=='-') {
    console.log(n1 - n2)
} else if (operador=='*') {
    console.log(n1 * n2)
} else if (operador=='/') {
    console.log(n1 / n2)
}
