/*4. Classificar Idade em Faixas Etárias 
Crie um programa que recebe a idade e informa qual
a faixa etária: criança, adolescente, adulto, idoso 
*/

let idade = parseInt(prompt("Digite a idade:"));
if (idade<=12) {
    console.log('Criança')
} else if (idade<=18) {
    console.log("Adolescente")
} else if (idade<=60) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}
