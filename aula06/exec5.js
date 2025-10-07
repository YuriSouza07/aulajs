//Solicite um nome ao usuário e peça a quantidade de vezes que ele deseja exibi-lo na tela. Utilize um loop while
let nome = prompt('Qual é seu nome?');
let quantidade = parseInt(prompt('Quantidade que você deseja exibir'));
while (quantidade >= 1){
    document.write(nome + "<br>");
    quantidade--
}


