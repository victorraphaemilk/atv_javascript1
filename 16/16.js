function listaStrings (array) {
    let maiorPalavra = ""
   
    for (let chave in array)  {
        if (array[chave].length > maiorPalavra.length) {
            maiorPalavra = array[chave]
         }
    }

    let asteristicos_chave = "*".repeat(maiorPalavra.length*1.5)


    console.log(asteristicos_chave)
    for (let chave in array) {
        console.log("* "+array[chave]+" ".repeat((maiorPalavra.length - array[chave].length) + 1) +" *")

    }
    console.log(asteristicos_chave)



        
}


listaStrings(["cheguei", "as", "oito", "e", "meira", "da", "manha"])