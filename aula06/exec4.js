// Solicite ao usuário 5 números usando prompt e exiba a soma total, usando um loop
let numero; soma = 0;
let testa;
for (let i=0; i<5; i++){
    if (testa!='') numero = parseInt(testa)
    numero = parseInt(prompt('digite um valor'));
    //soma = soma + numero;
    soma = soma + numero;
}
console.log('Total da some é: ',soma);
console.log('-=-=-=-=-=-=-=-=-=- Usando while -=-=-=-=-=-=-=-=-=-');
let num, sum = 0, cont = 0;
while (cont<5){
    num = parseInt(prompt('digite um valor'));
    sum += num;
    cont++;
}
