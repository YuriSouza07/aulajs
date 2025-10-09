// Verificar se número é par ou ímpar e repetir até digitar zero 
let numero = parseInt(prompt('Digite o número')); 
while (numero != 0){ 
    if ((numero % 2) == 0) { 
        alert('Número par'); 
    } else { 
        alert('Número impar'); 
    } 
    numero = parseInt(prompt('Digite o número <0 para sair>')); 
} 