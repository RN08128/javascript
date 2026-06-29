function carregar(){

var data = new Date()
var hora = data.getHours()

var horar = document.getElementById('content1')

horar.innerText = `Agora são ${hora} Horas.`
}