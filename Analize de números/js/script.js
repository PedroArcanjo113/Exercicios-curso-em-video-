let dados = document.getElementById('dados')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let armazenamento = []

function numero(n){
    if (Number(n) >= 1 && Number(n <= 100)){
        return true
    }else{
        return false
    }
}
function tela(a, n){
    if(n.indexOf(Number(a)) == -1 ){
        return true
    }else{
        return false
    }
}
function enviar(){
    
    if(numero(dados.value.length) == 0){
        //Valor vazio
        
        window.alert("#ERRO!# Por favor, insira um valor na lista")
    }else if(numero(dados.value) == false){
        //Número maior que 100 e menor que 0

        window.alert('Por favor, insira um número entre 1 e 100')
    }else if(tela(dados.value, armazenamento) == false){
        //Valor já inserido 

        let erro = Number(dados.value)
        window.alert(`O valor ${erro} já foi inserido`)
    }else{
        //Tudo certo
        armazenamento.push(Number(dados.value))
        let item = document.createElement('option')

        item.text += `Valor ${dados.value} adicionado` 
        lista.appendChild(item)
        
    }
    dados.value = ''
    dados.focus()
}
function finalizar(){
    if(armazenamento.length == 0){
        window.alert('Por favor, insira valores na lista')
    }else{

        var total = armazenamento.length
        let maior = armazenamento[0]
        let menor = armazenamento[0]
        let soma = 0
        let média = 0
        
        for(let m in armazenamento){
            soma += armazenamento[m]
            média += armazenamento[m]

            if(armazenamento[m] > maior){
                maior = armazenamento[m]
            }
            if(armazenamento[m] < menor){
                menor = armazenamento[m]
            }
        }
        média /= armazenamento.length
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números na lista.</p>`
        res.innerHTML += `<p>O maior valor inserido foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor inserido foi ${menor}.</p>`
        res.innerHTML += `<p>A soma entre os valores é de ${soma}.</p>`
        res.innerHTML += `<p>A média entre os valores é de ${média}.</p>`
    }
}