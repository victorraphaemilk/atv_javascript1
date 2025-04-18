
function maisVelha (listaObj) {

    let idadeMaisVelha = 0
    let pessoaMaisVelha = ''

    for(chave in listaObj) {

        if (listaObj[chave].idade > idadeMaisVelha)
            idadeMaisVelha = listaObj[chave].idade
            pessoaMaisVelha = listaObj[chave].nome



    }

    return {Pessoa:pessoaMaisVelha, idade:idadeMaisVelha}
}

pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Lucas", idade: 22 },
    { nome: "Ana", idade: 27 },
    { nome: "Roberto", idade: 35 },
    { nome: "Camila", idade: 29 },
    { nome: "Pedro", idade: 40 },
    { nome: "Larissa", idade: 21 }
]

console.log(maisVelha(pessoas))