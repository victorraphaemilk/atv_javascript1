function verificarPropriedade (objeto, string) {

    for (let chave in objeto) {
        for (let prop  in objeto[chave] ) {
            if (objeto[chave][prop] == string){
                return true
            }
        }
        
    
    
    }
    return false
}

console.log(verificarPropriedade([{nome: "Baier", idade:30},
    {nome: "Baier", idade:30},
    {nome: "JOJO", idade:40},
    {nome: "Giorno", idade:120},
    {nome: "Jennifer", idade:35}
], "Jennifer"))