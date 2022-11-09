const numeros = new Array(15, 13, 16, 22, 35, 87, 64, 19)
const data = new Date("2022-11-09")

/* function dataComNumeros() {
    console.log(numeros.sort(function (a, b) { return a - b }));
    console.log(data);
    console.log(data.getFullYear());
}

dataComNumeros() */

let html = ""
const interacaoComOsVetores = (valor, indice) => 
html += valor + " está na posição (" + indice+") "

numeros.forEach(interacaoComOsVetores)
console.log(html);


