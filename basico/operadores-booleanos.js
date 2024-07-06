const numero = 10

//operadores lógicos

console.log(numero > 20)
console.log(numero == 10) //true
console.log(numero == '10') //true 
console.log(numero === 10) //true
console.log(numero === '10') //false

console.clear() //limpa o console

console.log(numero != 10) // false
console.log(numero != '10') // false
console.log(numero !== '10') // true

console.clear() //limpa o console

// conjunções lógicas ---------------------

// AND => &&

let idade = 19

let tenhoCNH = false

const possoDirigir = idade >=18 && tenhoCNH

console.log(possoDirigir)

console.clear() //limpa o console

// OR => ||

idade = 72
const votoFacultativo = idade  < 18 || idade >= 70
console.log(votoFacultativo)

console.clear() //limpa o console

// NOT => !

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)
