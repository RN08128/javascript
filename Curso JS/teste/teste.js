
function parimpar(n){
    if (n%2==0){
        return 'par'
    } else{
        return 'impar'
    }
}

var numb = document.getElementById('num')
var res = document.getElementById('resultado')
res.innerHTML = parimpar(numb)