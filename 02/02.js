function isPar (a) {
    if (Number.isInteger(a)){
        if (a % 2 == 0) {
            
            return true
        }

        return false
    }

    return "Não é um numero inteiro"
}

console.log(isPar(5))
console.log(isPar(4))
console.log(isPar(6.6))