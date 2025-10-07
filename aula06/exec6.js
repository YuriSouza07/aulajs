//Solicite ao usuário um número e exiba a tabuada de multiplicação desse número de 1 a 10 
let contador = 1;
let numero = parseInt(prompt('Informe o número'));
while (contador<=10){
    document.write(numero +' x '+contador+' = '+ numero*contador+'<br>');
    contador++;
}

