function calcular(){
    var divc = document.getElementById('center')
    divc.innerHTML = '<select name="lista" id="lista" size = 10></select>'
    var numb = document.getElementById('num')
    var lista = document.getElementById('lista')
    var c = 1

    if (numb.value.length == 0){
        window.alert('Erro, Não foi possível encontrar um número para calcular, Tente novamente')
    } else{
            var num = Number(numb.value)
            lista.innerHTML = ``
        while (c <= 10){
            lista.innerHTML += `<option value ="v${c}">${num} x ${c} = ${num*c}</option>`
            c++
        }
    }
}

function limpar(){
    lista.innerHTML = ''
}