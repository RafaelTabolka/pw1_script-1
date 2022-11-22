/* Execercício de Javascript

1) Monte um vetor de 6 lugares, que adicione um numero da sorte para cada posição como palpite para um jogo na mega-sena.

2) Os números devem seguir as seguintes regras:
  a. 1º, 2º e 3º devem estar entre 01 até 24.
  b. 4º, 5º e 6º devem estar entre 25 e 60. 
  c. Os números não podem se repetir.
  d. Os numeros precisam ser gerados com uso de um laço dde repetição.
  e. Ao apresentar os numeros vem ser colocados de forma crescente no console.

3) O código deve utilizar a sboas práticas de funções para ser executado. */

function fazNumeroAleatorio() {
  
  let aleatorios = new Array();
  
  for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * 60);

    for (let i = 0; i < aleatorios.length; i++) {
      while (aleatorio == aleatorios[i]) {
        aleatorio = Math.floor(Math.random() * 60);
        i = 0;
      }
    }

    if (aleatorio >= 1 && aleatorio <= 24 && i <= 2) {
      aleatorios.push(aleatorio);
    }
    else if (aleatorio >= 25 && aleatorio <= 60 && i >= 3) {
      aleatorios.push(aleatorio);
    }
    else {
      i--
    }
  }
  
  return aleatorios.sort();
  
};

console.log(fazNumeroAleatorio());



