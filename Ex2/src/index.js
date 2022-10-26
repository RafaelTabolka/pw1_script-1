function calculaH(ca, co) {
    return (Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2)))
}
function calculaCa(h, co) {
    return (Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2)))
}
function calculaCo(ca, h) {
    return (Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2)))
}

function calculaTeorema(h, ca, co) {

    if (h == 0) {
        return calculaH(ca, co)
    }
    else if (ca == 0) {
        return calculaCa(h, co)
    }
    else {
        return calculaCo(h, ca)
    }
}

/* function variavelPitagoras() {
    let h = document.getElementById("h").value
    let ca = document.getElementById("ca").value
    let co = document.getElementById("co").value

    return document.getElementById("resultado").value = calculaTeorema(h, ca, co)
} */

function calculaA(b, c, d) {
    return (b * c) / d;
}

function calculaB(a, c, d) {
    return (a * d) / c;
}

function calculaC(b, a, d) {
    return (a * d) / b;
}

function calculaD(b, c, a){
    return(b*c)/a;
}

function calculaRegra(a, b, c, d) {
    if (a == 0) {
        return calculaA(b, c, d);
    } else if (b == 0) {
        return calculaB(a, c, d);
    } else if (c == 0) {
        return calculaC(a, b, d);
    } else {
        return calculaD(a, b, c);
    }
}

function calculaNumeros(n1, n2, op){
    if(op=="+"){
        return (n1+n2);
    }else if(op=="-"){
        return (n1-n2);
    } else if(op=="*"){
        return (n1*n2);
    } else if(op=="/"){
        return (n1/n2);
    } else if(op=="raiz"){
        return Math.sqrt(n1+n2);
    } else if(op=="potencia"){
        return Math.pow(n1, n2);
    }
   }

function calculaAvancado(opcao, p1, p2, p3, p4, op) {
    switch (opcao) {
        case "pitagoras":
            return calculaTeorema(p1, p2, p3)
            break;
        case "regra":
            return calculaRegra(p1, p2, p3, p4)
            break;
        case "calculadora":
            return calculaNumeros(p1, p2, op)
            break;
        default:
            return "Essa opção não existe, chefia!"
    }
}

console.log(calculaAvancado("calculadora", 2, 3, null, null, "+" ));

