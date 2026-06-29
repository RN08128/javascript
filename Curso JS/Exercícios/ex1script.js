function carregar(){

var data = new Date()
var hora = data.getHours()

var horario = document.getElementById('content1')

horario.innerText = `Agora são ${hora} Horas.`
var img = document.getElementById('content2')

if(hora >= 6 && hora <= 8){
    img.innerHTML = '<img src="Manhã.jpg" alt=""></img>'
}
if (hora >= 9 && hora <= 11){
    img.innerHTML = '<img src="Dia.jpg" alt=""></img>'
}
if(hora >= 12 && hora <= 15){
    img.innerHTML = '<img src="Tarde.jpg" alt=""></img>'
}
if(hora >= 16 && hora <= 20){
    img.innerHTML = '<img src="Tardinha.jpg" alt=""></img>'
}
if(hora >= 20){
    img.innerHTML = '<img src="Noite.jpg" alt=""></img>'
}
if(hora <= 5){
    img.innerHTML = '<img src="Noite.jpg" alt=""></img>'
}
}