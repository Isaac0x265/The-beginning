lista_de_estudantes = [
    isaac = {
        nome : "isaac",
        nota1 : 7,
        nota2: 5
    },
    rebecca = {
        nome : "rebecca",
        nota1 : 7,
        nota2: 8
    },
    alice = {
        nome : "alice",
        nota1:7,
        nota2:8
    }
]


function passou(a,b){
    return((a+b)/2) >=7
}

for (const estudante of lista_de_estudantes) {
    alert(passou(estudante.nota1,estudante.nota2)? `${estudante.nome} passou`:`${estudante.nome} não passou`)
}