/*8. Verificar se uma pessoa pode comprar bebidas alcoólicas 
Crie um programa que leia a idade de uma pessoa e verifique se ela 
pode comprar bebidas alcoólicas. As regras são: 
A pessoa pode comprar se tiver 18 anos ou mais 
Se ela tiver entre 16 e 17 anos e estiver acompanhada de um responsável legal. 
Imprima "Pode comprar bebidas" ou "Não pode comprar bebidas", dependendo do caso. 
*/
let idade = Number(prompt('Qual a sua idade'));
let acompanhada = Number(prompt('Você está acompanhado? (s / n)'));
if (idade >= 18) {
    console.log("Pode comprar bebida alcólica")
} else if (idade >= 16 && acompanhada == 's') {
    console.log("Pode comprar bebida alcólica")
} else {
    console.log("Não pode comprar bebida alcólica")
}
  
