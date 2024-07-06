function saudacao() {
    console.log('Olá, Seja bem vindo(a) ao nosso código de estudos.')
}

saudacao()

console.clear()

//PASSAGEM DE PARAMETROS

const input = require("readline-sync")

function perguntaNome(nome) {
    console.clear()
    console.log('Seu nome é: ',nome)
}

// perguntaNome(String(input.question('Digite o seu Nome: ')))
console.clear()

function saudacao(nome) {
    console.log(`Olá, ${nome} Seja bem vindo(a) ao nosso código de estudos.`)
}

saudacao('Philipe')

console.clear()
//retorno da função


function soma(n1,n2){
    return n1+n2
}

let resultado = soma(10,20)

console.log(soma(1,2))
console.log(resultado)