function calculaMultiplo(limite, multiplo2, maximo) {
    let multiplo = 0
    let m = 0
    let contagem = 0
    while (m < limite) {

        multiplo = Math.floor(Math.random() * maximo)

        if (multiplo % multiplo2 == 0) {
            m++
            console.log(multiplo + " é multiplo de 7.")
          
        }
        contagem ++
    }
    console.log("Foram " + contagem + " sorteios para encontrar seus múltiplos.");
}

calculaMultiplo(5, 8, 200)