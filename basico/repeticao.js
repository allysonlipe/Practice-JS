/* Instalando biblioteca no node: Utiliza-se o comando npm no terminal.
No caso, o node não possui nada como ferramenta para receber dados do usuário, portanto foi criada uma biblioteca.
O nome dessa bilioteca é: readline-sync

Basta digitar no terminal npm install readline-sync
Para instalar globalmente, Basta digitar no terminal npm install -g readline-sync
*/

const input = require("readline-sync")

const numeroSorteado = 5
    let numero = Number(input.question("Qual numero voce escolhe? "))
// console.log(numero, typeof numero)


while (numero !== numeroSorteado) {
    console.log('Você errou!')
    numero = Number(input.question("Qual numero voce escolhe? "))
}
console.log('Você Acertou!')

