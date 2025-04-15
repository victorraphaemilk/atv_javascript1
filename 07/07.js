function mediaArredondada (lista) {

    var len = lista.length;
    var sum = lista.reduce((acc, atual) => acc + atual, 0)


    return Math.round((sum / len))

}


console.log(mediaArredondada([1,2,3,4,5]))
console.log(mediaArredondada([4,6,7,8,9,10]))