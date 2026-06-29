var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*for (var c=1;c<num.length;c++){
    console.log(num[c])
}
*/ 
for(var c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
let pos = num.indexOf(11)
    if (pos == -1){
        console.log('O valor não foi encontrado')
    }else{
console.log(`O valor está na posição ${pos}`)
    }