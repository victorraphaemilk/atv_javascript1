function calcularImpostoDeRenda (salarioBruto) {

    if (salarioBruto < 1903.98) {
        return "Isento "
    } else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
        return salarioBruto - (salarioBruto * 0.075)
    } else if (salarioBruto > 2826.66 && salarioBruto <= 3751.05) {
        return salarioBruto - (salarioBruto * 0.15)
    } else if (salarioBruto > 3751.06 && salarioBruto <= 4664.68) {
        return salarioBruto - (salarioBruto * 0.225) 
    } else {
        return salarioBruto - (salarioBruto * 0.0227)
    }

    
}


console.log(calcularImpostoDeRenda(500))
console.log(calcularImpostoDeRenda(2826.55))
console.log(calcularImpostoDeRenda(5000))
