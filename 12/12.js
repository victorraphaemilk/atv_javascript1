const readline = require("readline")

const pergunta_interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

let numero_secreto = 35


function adivinheONumero () {

    function fazerPergunta (){

        pergunta_interface.question("Chuta um numero paizão ", function(chute){
            chute = parseInt(chute)
            if (chute == numero_secreto) {
                console.log("Parabens, acertou paizão ")
                pergunta_interface.close()
            } else if(chute > numero_secreto) {
                console.log("Numero maior que o numero secreto, tente novamente ")
                fazerPergunta()
            }else {
                console.log("numero menor que o numero secreto, tente novamente ")
                fazerPergunta()

            }

        })


       
    }

    fazerPergunta()

}

adivinheONumero()