function calcularMediaAlunos (alunos) {

    for (let iter = 0; iter < alunos.length; iter++){

        var media = alunos[iter].notas
        var len = media.length
        var soma = 0 
            for (let meed = 0; meed < media.length; meed++){
                
                soma = soma + media[meed]
            }
    
    
        console.log(alunos[iter].nome + ": Media: " + (soma/len).toFixed(1))
    }

}

let grays =[
    
    {nome: "Raphael", notas: [7, 5.5 , 8]},
    {nome: "Eraldo", notas: [7, 5.4 , 10]},
    {nome: "Davi", notas: [10, 9.7 , 8]},
    {nome: "Grazy", notas: [9, 9 , 5]},
    {nome: "Bruno", notas: [5, 5 , 5]}

 ]


 calcularMediaAlunos(grays)