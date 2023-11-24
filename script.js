function limpar(){
    var n1txt = document.getElementById("n1")
    var n2txt = document.getElementById("n2")
    var result = document.getElementById("result")

    n1txt.value = ''
    n2txt.value = ''
    result.innerHTML = 0
}

function op(){
    var n1 = document.getElementById("n1")
    var n2 = document.getElementById("n2")
    var result = document.getElementById("result")
    
}

// FUNÇÕES DAS OPERAÇÕES ABAIXO

function soma(){
    result.innerHTML = Number(n1.value) + Number(n2.value)
} 
function subtracao(){
    result.innerHTML = Number(n1.value) - Number(n2.value)
}
function multiplicacao(){
    result.innerHTML = Number(n1.value) * Number(n2.value)
}
function divisao(){
    var divi  = Number(n1.value) / Number(n2.value)
    if (isNaN(divi)){
        result.innerHTML = 0
    } else if (isFinite(divi)){
        result.innerHTML = divi
    }
}