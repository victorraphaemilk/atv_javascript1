function calcularPrecoProduto ( valorCusto, margemLucro, valorFrete ) {

    let bruto = valorCusto + valorFrete
    margemLucro = valorCusto + (valorCusto * ( margemLucro/100 ))
    bruto = bruto + margemLucro

    return bruto



}

console.log(calcularPrecoProduto(6, 20.5, 17))