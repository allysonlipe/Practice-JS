//ARRAYS 2 - MÉTODOS

//FATIAMENTO - SLICE

let arr1 = ['15', '10', '30', '29']

console.log(arr1.slice(0, 2)) // retorno: 15 e 10
console.log(arr1.slice(2)) // retorno: 30 e 29

console.clear()

//adicionando elementos - push ; unshift

let arr2 = []
console.log('Antes de adicionar no array: ', arr2) // Insere no array no início.
arr2.push(3)
console.log('Depois de adicionar no array: ', arr2) // Insere no array no início.
arr2.unshift(2)
console.log('Depois de inserir no array com unshift: ', arr2) // Insere no array no fim.

console.clear()

//Remoção de elementos - pop and shift

let arr3 = ['3', '5', '651', '17', '62', '98']
console.log('Antes de remover com o pop: ', arr3)
arr3.pop()
console.log('Depois de remover com o pop: ', arr3)

console.log('Antes de remover com o shift: ', arr3)
arr3.shift()
console.log('Depois de remover com o shit: ', arr3)

console.clear()

// Concatenação de arrays

console.log(arr1)
console.log(arr2)
console.log(arr3)

arr1.concat(arr2)

console.log('Arr1 concatenado com o arr3: ', arr1.concat(arr3))

console.clear()

let array1 = []
let array2 = []

for(let i=0; i <= 10; i++) {
    array1[i] = i
    array2[i] = 10+i
}

console.log(array1.concat(array2))

console.clear()

// buscando elementos indexOf | lastIndexOf

let indiceDoElemento651 = arr3.indexOf('651')

console.log(indiceDoElemento651)


let arr4 = [1,2,3,4,4]


console.log(arr4.lastIndexOf(4))

console.clear()

// Descobrindo a existência de um elemento: 
console.log(arr1.includes(9))
console.log(arr1.includes(10))
console.log(arr1.includes('10'))


console.clear()

// Inverte um array



console.log('array normal: ',arr1)

const arr1Invertido = arr1.reverse()

console.log('array invertido: ',arr1Invertido)

