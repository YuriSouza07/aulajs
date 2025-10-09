//Receber 10 idades e informar quantas são maiores de idade
let idade; somaqtdmaior = 0;
for (let i = 1; i<=10; i++){
    idade = parseInt(prompt('Idade'));
    if (idade >= 18) {
        somaqtdmaior++;
    }
}
document.write('Qtd de maiores: '+somaqtdmaior);
    

   