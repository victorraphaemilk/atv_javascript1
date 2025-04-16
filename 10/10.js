function calcularIdade (data) {
    data_particao = data.split("/")

    var dia = parseInt(data_particao[0])
    var mes =  parseInt(data_particao[1])
    var ano = parseInt(data_particao[2])


    var data_nascimento = new Date (ano, mes - 1, dia)

    var hoje = new Date()
    var idade = hoje.getFullYear() - data_nascimento.getFullYear()




    return idade
}

console.log(calcularIdade("23/02/1998"))
console.log(calcularIdade("05/10/2004"))