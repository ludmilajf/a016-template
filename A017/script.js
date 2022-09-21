// function declarandoFuncao() {
//     console.log(" Olá, mundo!")   
// }
// declarandoFuncao()

function nomesDiferentes(nome) {
    console.log(`Olá ${nome}`);
}
nomesDiferentes("Ludmila")
nomesDiferentes("Geovana")
nomesDiferentes("Cida")

//Função não-nomeada
const chameNome = function(nome){
    console.log(nome);
}
chameNome("Cida")

// function digiteNome(nome) {
//    // prompt("Digite seu nome:")
//     console.log(nome);
// }
// digiteNome()


//Retornando valores:
//Jeito certo 1
function funcaoNumeros(num1, num2) {
    let guardar = num1 + num2
    console.log(guardar);
}
funcaoNumeros(5, 10)

//Jeito com return
function funcaoNumeros2(num1, num2) {
    let guardar2 = num1 + num2
    return guardar2
}
console.log(funcaoNumeros2(5, 5))


//______________________________________________________________
//Unindo funções com Arrays

//Arrow Function:
const imprimeNumeros = (array) => {
    const novoArray = [] //criou um array vazio
    novoArray.push(array[0], array[array.length-1]) //adicionando coisas ao array
    return novoArray //resultado
}
arrayTeste = [1, 2, 3, 4, 5]
console.log(imprimeNumeros(arrayTeste))

//Função com 
//array de números como parâmetro e 
//retorno de novo Array com números pares
const numerosPares = (array) => {
    let novoArrayPar = []
    for(let i of array){
        if(i%2 === 0){
        novoArrayPar.push(i)
        }
    }
    return novoArrayPar
}
const arrayTeste2 = [23, 76, 100, 1, 435, 70]
console.log(numerosPares(arrayTeste2));

//Declare uma função que
//receba um array de numeros;
//retorne um novo array com dois elementos:o ultimo e o primeiro numero do array recebido dividido por 2
// chame a função com 2 arrays diferentes

const imprimeArrayNumeros = (array2) => {
    let arrayNumeros = []
    arrayNumeros.push(array2[array2.length-1]/2, array2[0]/2)
    return arrayNumeros
}
const arrayTeste3 = [4, 9, 1, 6, 39, 60]
console.log(imprimeArrayNumeros(arrayTeste3));