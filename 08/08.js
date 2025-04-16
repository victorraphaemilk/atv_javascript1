function contarImparesEPares (number) {
    
    number = number.toString()
    
    var impares = 0
    var pares = 0

    for(let i = 0; i < number.length; i++) {
        
        num = parseInt(number[i])

        if (num % 2 == 0) {

            pares = pares + 1
        } else {

            impares = impares + 1


        }
        
        
        
    }

    return {pares: pares, impares: impares}

}

console.log(contarImparesEPares(2822))
console.log(contarImparesEPares(672816378213678))