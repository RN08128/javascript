/*
function convertf(){
    var valorf = Number(document.getElementById('num1').value)
    var msg = document.getElementById('res')

    var res = (valorf - 32) * (5/9)
    
    msg.innerText = res
}
*/

/*function converterF(valorF){
    return (valorF - 32) * (5/9);
}*/

const carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){ alert('BIIIIIIIIIIIIIII')},
    completo: function() {
        return `A marca é ${carro.marca}, o modelo é ${carro.modelo} e o ano é ${carro.ano}`
    }
}

console.log(carro.completo());