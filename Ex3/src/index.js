/* Monte um vetor de 6 posições que irão sortear 6 números 
entre 1 e 60 aleatóriamente, com as seguintes condições:
1º Os 6 números não podem ser iguais
2º Eles devem ser apresentados em ordem crescente
3º Os 3 primeiros números não devem estar na casa 0 ao 20 e do 21 ao 45
4º Os 3 últimos devem estar na casa dos 46 ao 55 e o último 56 até 60. */


function sorteio() {
    let aleatorios = []

    for (let i = 1; i <= 6; i++) {
        let numAleatorio = Math.floor(Math.random() * 60)

        aleatorios.push(numAleatorio[i])
        
    }

}

console.log(sorteio()); 
