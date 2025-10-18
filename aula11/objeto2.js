class ContaBancaria { 
    #saldo;  // Atributo privado 
 
    constructor(titular, saldo) { 
        this.titular = titular; // Atributo público 
        this.#saldo = saldo;  // Atributo privado 
    } 
    depositar(valor) { 
        this.#saldo += valor; 
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.#saldo}`); 
    } 
    consultarSaldo() { 
        console.log(`Saldo de ${this.titular}: R$ ${this.#saldo}`); 
    }
    debitar(valor) { 
        if (valor>this.#saldo){ 
            console.log('Não há saldo para este débito'); 
        } else { 
            this.#saldo -= valor; 
            this.consultarSaldo(); 
        } 

    } 
} 
 
// Criando uma conta 
let conta = new ContaBancaria("Ana", 1000); 
// ✅ Acesso permitido (público) 
console.log(conta.titular); // "Ana" 
// ✅ Métodos internos podem acessar o atributo privado 
conta.consultarSaldo(); // Exibe o saldo corretamente 
conta.depositar(1000);
conta.consultarSaldo();

 

