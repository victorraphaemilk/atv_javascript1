function CalcularDesconto (preco, desconto) {

    desconto = desconto/100
    
    return preco - (preco * desconto)

}

console.log(CalcularDesconto(100,20))
console.log(CalcularDesconto(49, 15))