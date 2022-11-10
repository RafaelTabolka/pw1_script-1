/* Monte um vetor de 6 posições que irão sortear 6 números 
entre 1 e 60 aleatóriamente, com as seguintes condições:
1º Os 6 números não podem ser iguais
2º Eles devem ser apresentados em ordem crescente
3º Os 3 primeiros números não devem estar na casa 0 ao 20 e do 21 ao 45
4º Os 3 últimos devem estar na casa dos 46 ao 55 e o último 56 até 60. */

let aleatorios = new Array();

const fazNumeroAleatorio = () => {
  for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * 60);

    for (let i = 0; i < aleatorios.length; i++) {
      while (aleatorio == aleatorios[i]) {
        aleatorio = Math.floor(Math.random() * 60);
        i = 0;
      }
    }

    if (aleatorio > 45 && aleatorio <= 55 && i < 5) {
      aleatorios.push(aleatorio);
    } else if (aleatorio >= 56 && i == 5) {
      aleatorios.push(aleatorio);
    } else {
      i--;
    }

    /* if(i == 5 && aleatorios.length != 6){
      while(aleatorios.length != 0){
        aleatorios.shift()
      }
    } */
  }

  return aleatorios.sort();
};

console.log(fazNumeroAleatorio());
