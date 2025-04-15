function soma (a,b) {
    if (Number.isInteger(a / b)) {
        return a+b;

    }
     return "numeros não validos ";
}


console.log(soma(5,5))
console.log(soma(5,"a"))
