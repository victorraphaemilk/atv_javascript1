function FiltrarCarros (lista, ano) {
    let filtro = []
    
    for (let chave of lista) {
        if(chave.ano > ano){
            filtro.push({marca:chave.marca, modelo: chave.modelo, ano: chave.ano })
        }
    }

    for (let chave of filtro) {
        console.log(chave)
    }
}

let carros = [
    { ano: 2020, marca: "Toyota", modelo: "Corolla" },
    { ano: 2018, marca: "Honda", modelo: "Civic" },
    { ano: 2022, marca: "Chevrolet", modelo: "Onix" },
    { ano: 2019, marca: "Volkswagen", modelo: "Gol" },
    { ano: 2021, marca: "Hyundai", modelo: "HB20" },
    { ano: 2017, marca: "Ford", modelo: "Ka" },
    { ano: 2023, marca: "Fiat", modelo: "Argo" },
    { ano: 2016, marca: "Renault", modelo: "Sandero" }
];

FiltrarCarros(carros, 2019);