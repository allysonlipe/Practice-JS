// 1.Coerção implicita  ("Manual")

const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

const numeroEmFormatoDeStringDeVoltaParaNumber = Number(numeroEmFormatoDeString)
console.log(numeroEmFormatoDeStringDeVoltaParaNumber, typeof numeroEmFormatoDeStringDeVoltaParaNumber)

console.log(Boolean(1))

console.clear() // limpa o console

// 2.Coerção explicita  ("Automática")

console.log(10+1)
console.log(10+"1") // Converte tudo para string e concatena
console.log(10-"1") // Na subtração, a string é convertida para Number
console.log(10-"asdasdasd") // NaN - Not A Number


