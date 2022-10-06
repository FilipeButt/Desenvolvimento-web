//função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//NaN
imprimirSoma(2, 3, 4, 5, 6)//ignora os posteriores a A e B
imprimirSoma()//NaN

// função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

