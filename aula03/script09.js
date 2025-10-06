/*Monte um programa para ler o salário de um funcionário, calcular o vale transporte a ser descontado (6%)
 e o inss a ser descontado, sabendo que se o salário é menor do que 2500 o inss é de 8% e maior ou igual a 2500 o inss é de 11% 
(atenção estes valores inseridos foram aleatórios, somente para uso do exercício) 
*/
let salario = parseFloat(prompt('Informe o salário'));
let vt = salario *0.06;
let inss;
if (salario < 2500){
    inss = salario * 0.08;
} else {
    inss = salario * 0.11;
}
console.log('Desconto do vt',vt);
console.log('Desconto do inss: ',inss);