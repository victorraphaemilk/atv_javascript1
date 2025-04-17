function maisDeCincoPalavras (array) {

    let lista = []

    for (chave in array) {
        if (array[chave].length > 5) {
            
            lista.push(array[chave])
            
        }
    }

    return lista

} 

console.log(maisDeCincoPalavras(["Terencio", "Lucas", "Baier", "Raphael", "Thomas"]))



