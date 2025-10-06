/*Monte um programa para ler a idade de uma pessoa
e informar esta pessoa pode ou não votar 
*/
let idade =Number(prompt('Qual sua idade'));
if (idade >= 16 ) {
    document.write('Você pode votar');
} else {
    document.write('Você naó pode votar, pois sua idade não é permitida');
}
