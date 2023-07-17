function res(){
    var num = document.getElementById('num')
    var table = document.getElementById('table')
    
    if(num.value.length == 0){
        //ERRO!
        
        window.alert('#ERRO# Por favor, digite um número!')
    }else{
        //Gerador da tabuada
        
        var n = Number(num.value)
        table.innerHTML= ''

        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')

            item.text += ` ${n} X ${c} = ${n*c} `
            item.value =`tab${c}`
            table.appendChild(item)
        }
    }
}