

function provavelNumeros(x2, x1){
   

    if(x1==1){
        if(x2== 1){
            return "C";
        }else {
            return "B";
        } 
    }else {
        return "A";
    }
}


function geraNumero(){

    return((Math.floor(Math.random() * 2)));
}

console.log(provavelNumeros(geraNumero(), geraNumero()));
