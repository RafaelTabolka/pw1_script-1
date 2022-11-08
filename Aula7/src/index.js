/* let a = []

for(let i = 0; i <= 10; i++){
    a[i] = i

}
console.log(a); */


const frutas2 = new Array()

function abasteceVetorOrganizado(fruta) {
    frutas2.push(fruta)
    frutas2.join(" | ")
    return frutas2.sort()
}