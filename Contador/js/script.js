function Check(){
    var beginning = document.getElementById('beginning')
    var end = document.getElementById('end')
    var jump = document.getElementById('jump')
    var res = document.getElementById('res')
    res.innerHTML='Contando: '

    var b = Number(beginning.value)
    var e = Number(end.value)
    var j = Number(jump.value)
    
    if(beginning.value.length == 0){
        window.alert("Por favor, insira um valor válido para iniciarmos a contagem")
    }else if(end.value.length == 0){
        window.alert("Por favor, insira um valor válido para terminamos a contagem")
    }else if(jump.value <= 0 ){
        window.alert("Como o valor do salto foi invalido iremos considerar que o valor do salto foi 1")

        if(b < e){
            do{
                res.innerHTML +=` ${b} `
                b ++
            }while(b <= e)
        }else{
            do{
                res.innerHTML += ` ${b} `
                b--
            }while(b >= e)
        }
    }else{

        if(b < e){
            do{
                res.innerHTML +=` ${b} `
                b += j
            }while(b <= e)
        }else{
            do{
                res.innerHTML +=` ${b} `
                b -= j
            }while(b >= e)
        }
        res.innerHTML += `\u{1F3C1}`
    }
}