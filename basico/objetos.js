let pessoa = {
    nome: 'Allyson',
    'sobrenome-da-pessoa': 'Philipe',
    idade: 27,
    altura: 1.80,
    peso: 100,
}

console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa["sobrenome-da-pessoa"]) // seletor alternativo.

console.clear()
// adicionar um par chave valor ?

pessoa.cidadeNatal = 'Natal - RN'

console.log(pessoa.cidadeNatal)

console.clear()

//como remover um par chave valor? 

delete pessoa["sobrenome-da-pessoa"]
console.log(pessoa)


console.clear()

// como percorrer

for (let chave in pessoa) {
    console.log(chave)
} 