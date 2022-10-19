function calculaTeorema(h, ca, co) {
    
    if(h == 0) {
        return (Math.sqrt(Math.pow(ca, 2) + Math.pow(co, 2)))
    }
    else if (ca == 0) {
        return (Math.sqrt(Math.pow(h, 2) - Math.pow(co, 2)))
    }
    else {
        return (Math.sqrt(Math.pow(h, 2) - Math.pow(ca, 2)))
    }        
}

console.log(calculaTeorema(0, 21, 20));
console.log(calculaTeorema(13, 5, 0));
console.log(calculaTeorema(10, 0, 6));

