var numeros = [];
var c = 0
var msg = document.getElementById('content2')
msg.innerHTML = ''
var msg2 = document.getElementById('content3')
var total = 0
function load1(){
    let input = document.getElementById('num')
    let num = Number(input.value)
    
    if (num<=0||num>100){
        window.alert('[Erro] O número inserido é inválido.')
    } else{
        if(numeros.includes(num)){
            window.alert('ERRO o número já foi inserido anteriormente')        
        } else{
            numeros.push(num)
            msg2.innerHTML = ''
            msg.innerHTML += `<option value="v${c}">Valor ${num} atribuído</option>`
            total += num
            c++
        }
        
    }
}

function load2(){
    if(numeros == 0 || numeros.length < 2){
        window.alert('Insira pelo menos 2 números antes de Finalizar')
    }else{
        msg2.innerHTML = ''
        numeros.sort
        msg2.innerHTML += `Ao todo, temos ${numeros.length} número(s) cadastrado(s).<br> O maior valor informado foi ${numeros[c-1]}.<br> O menor valor informado foi ${numeros[0]}.<br> Somando todos os valores, temos ${total}.<br> A média dos valores digitados é ${total/numeros.length}.`
    }
}

function load3(){
    msg.innerHTML = ''
    msg2.innerHTML = ''
    numeros = [0]
}