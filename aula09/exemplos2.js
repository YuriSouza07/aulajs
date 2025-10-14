let valor;
while (true){
    valor = (Math.floor(Math.random() * 10000) + 1);
    console.log(valor);
    if (valor == 10) {
        console.log('saiu');
        break;
    }
}