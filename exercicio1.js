var n1 = Number(prompt("qual é o primeiro numero: "))
var n2 = Number(prompt("qual é o segundo numero: "))

var soma = n1 + n2
var diferenca =  n1 - n2
var produtdo = n1 * n2
var divisao = n1/n2 
var resto  = n1%n2
alert("a soma dos dois numeros é" + soma)
alert("a diferença dos dois numeros é" + diferenca)
alert("o produto dos dois numeros é" + produtdo)
alert("a divisão dos dois numeros é" + divisao)
alert("o resto  dos dois numeros é" + resto)

if (n1 != n2) {
    alert("os numeros são diferentes")
}
else{
    alert("os numeros são iguais")
}

somapar = soma%2 == 0

if (somapar) {
    alert("a soma dos dois numeros é par")
}
else{
    alert("a soma dos dois numeros é impar")
}