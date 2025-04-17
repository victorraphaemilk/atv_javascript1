function arrayObjetos (lista) {

    for (let chave = 0; chave < lista.length ; chave++){
        console.log(lista[chave].autor + ": " + lista[chave].livro )
    }

}

livros = [
    { livro: ["Dom Casmurro", "O Alienista"], autor: "Machado de Assis", ano: 1899 },
    { livro: ["O Senhor dos Anéis", "O Hobbit"], autor: "J.R.R. Tolkien", ano: 1954 },
    { livro: ["1984", "A Revolução dos Bichos"], autor: "George Orwell", ano: 1949 },
    { livro: ["O Pequeno Príncipe"], autor: "Antoine de Saint-Exupéry", ano: 1943 },
    { livro: ["Capitães da Areia", "Gabriela, Cravo e Canela"], autor: "Jorge Amado", ano: 1937 },
    { livro: ["Ensaio sobre a Cegueira", "Todos os Nomes"], autor: "José Saramago", ano: 1995 },
    { livro: ["Dom Quixote"], autor: "Miguel de Cervantes", ano: 1605 },
    { livro: ["Crime e Castigo", "Os Irmãos Karamázov"], autor: "Fiódor Dostoiévski", ano: 1866 }
]


arrayObjetos(livros)