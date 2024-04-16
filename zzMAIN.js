const botaoTentar = document.querySelector('#botaoEnviar')
const tela1 = document.querySelector(".tela1")
const tela2 = document.querySelector(".tela2")
const attempt = document.querySelector('#inputMAH')
const jogarDenovo = document.querySelector('#jogardenovo')
const paragrafo = document.querySelector('#paragrafo')

let randomNumber = Math.round(Math.random()*10)
let tentativas = 0
console.log(randomNumber)

botaoTentar.addEventListener('click',handleTryClick)
jogarDenovo.addEventListener('click',handleplayagain)




function handleplayagain(){
    tela2.classList.add('hide')
    tela2.classList.remove('active')
    tela1.classList.remove('hide')
    randomNumber = Math.round(Math.random()*10)
    console.log(randomNumber)   
}
function handleTryClick(event) {
    event.preventDefault()
    console.log(attempt.value)
    
    if (attempt.value == randomNumber) {
        tela1.classList.add('hide')
        tela1.classList.remove('active')
        tela2.classList.remove('hide')
        tela2.classList.add('active')
        paragrafo.innerHTML = `voce acertou em ${tentativas} tentativas`

    }
    else{
        tentativas++
        attempt.value=''
    }
    
    
}