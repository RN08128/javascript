function contar(){
    var inicio = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('pas').value)

    var msg = document.getElementById('msg')
    var contador = document.getElementById('contagem')
    

    if(passo <= 0){
                window.alert('Passo invalido. Considerando passo [1]')
                var passo = 1
            } else if (inicio <= 0){
                window.alert('Caixa de início invalida. Considerando número [0]')
                var inicio = 0
            }
    if (inicio > fim) {
        contador.innerText = ''
        while(fim <= inicio){
            contador.innerText += ` 👉 ${inicio} `
            inicio = (inicio - passo)

        } if (inicio <= fim){
            msg.innerText = 'Contando:'
            contador.innerText += '🏁'
        }
    } else{
        contador.innerText = ''
        while(fim >= inicio){
            contador.innerText += ` 👉 ${inicio} `
            inicio = (inicio + passo)

        } if (inicio >= fim){
            msg.innerText = 'Contando:'
            contador.innerText += '🏁'
        }
    }
}