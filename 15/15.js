function maiorPalavra (string) {
    let array = string.split(" ")

    let maiorPalavra = ''

    for (let chave in array){
        if (array[chave].length > maiorPalavra.length) {
            maiorPalavra = array[chave]
            

         }
    } 

    return maiorPalavra

    
}

console.log(maiorPalavra("MAs o impossivel não há quando se trata de barça"))