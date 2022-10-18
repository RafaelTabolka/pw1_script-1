function calculaA(b, c, d){
    return(b*c)/d;
}
function calculaB(a, c, d){
    return(a*d)/c;
}
function calculaC(b, a, d){
    return(a*d)/b;
}
function calculaD(b, c, a){
    return(b*c)/a;
}
function calculaRegra(a, b, c, d){
    if(a == 0){
        return calculaA(b, c, d);
    }else if (b == 0) {
        return calculaB(a, c, d);
    }else if(c == 0){
        return calculaC(a, b, d);
    }else{
        return calculaD(a, b, c);
    }
}

console.log(calculaRegra(100, 320, 40, 0));