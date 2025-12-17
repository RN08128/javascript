function carregar(){
    var x = 2025
    var ano = Number(x)
    var idad = document.getElementById('nasc')
    var idade = Number(idad.value)
    var sx = document.getElementsByName('sexo')
    
    var age = document.getElementById('resf')
    var imag = document.getElementById('resfi')
    var res = (ano - idade)
    var genero = ''
    var genero1 = 'Criança'
    var genero2 = 'Jovem'

    if (idade == 0 || idade >= ano){
        window.alert(`[ERRO!] Verifique os dados e tente novamente!`)        
    } else if(sx[0].checked){
        genero = 'Mulher'
            if(res >= 1 && res <= 10){
                imag.innerHTML = '<img src="criança-F.jpg"  alt=""></img>'
            age.innerText = `Você é uma ${genero1} de ${res} anos de vida`}
                
            else if (res >= 11 && res <= 21){
                imag.innerHTML = '<img src="Jovem-F.jpg"    alt=""></img>'
            age.innerText = `Você é uma ${genero2} de ${res} anos de vida`}
            else if(res >= 22 && res <= 50){
                imag.innerHTML = '<img src="Adulto-F.jpg"  alt=""></img>'
            age.innerText = `Você é uma ${genero} de ${res} anos de vida`}
            else if(res >= 51){
                imag.innerHTML = '<img src="Velho-F.jpg"   alt=""></img>'
            age.innerText = `Você é uma ${genero} de ${res} anos de vida`}
    } else if(sx[1].checked){
        genero = 'Homem'
            if(res >= 1 && res <= 10){
            imag.innerHTML = '<img src="criança-M.jpg"alt=""></img>'
            age.innerText = `Você é um ${genero1} de ${res} anos de vida`}
            else if (res >= 11 && res <= 21){
                imag.innerHTML = '<img src="Jovem-M.jpg" alt=""></img>'
            age.innerText = `Você é um ${genero2} de ${res} anos de vida`}
            else if(res >= 22 && res <= 50){
                imag.innerHTML = '<img src="Adulto-M.jpg" alt=""></img>'
            age.innerText = `Você é um ${genero} de ${res} anos de vida`}
            else if(res >= 51){
                imag.innerHTML = '<img src="Velho-M.jpg" alt=""></img>'
            age.innerText = `Você é um ${genero} de ${res} anos de vida`}
    }
}