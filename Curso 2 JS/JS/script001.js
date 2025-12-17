function convert(){
    var valordolar = Number(document.getElementById('dolar').value)
    var cotacao = Number(document.getElementById('cota').value)
    var msg = document.getElementById('res')

    var res = valordolar * cotacao
    msg.innerText = `U$${valordolar} convertido para real serão: R$${res}`
}