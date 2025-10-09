//Ler 10 números e mostrar a média 
//Descrição: Solicite 10 números e mostre a média deles ao final. 
let num, somanum = 0;
for(let i=0; i<10; i++){
    num = parseInt(prompt('Numero'));
    somanum += num;
}
document.write('Média:'+(somanum/10));
