function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txt-ano')
    var res = document.getElementById('res')

    if( fAno.value.length == 0 || fAno.value > ano){
        window.alert('#ERRO# Verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','img')
    
        if(sexo[0].checked){
           if(idade >= 0 && idade <= 4){
                //Bebê

                gênero ="um <strong> bebê </strong>"
                img.setAttribute('src','img/bebe-masc.png')
           }else if(idade >= 5 && idade <= 13){
                //Criança

                gênero = "uma <strong> criança </strong>"  
                img.setAttribute('src','img/crianca-masc.jpg')
           }else if(idade >= 14 && idade <= 17){
                //Adolescente

                gênero = "um <strong> adolescente </strong>"
                img.setAttribute('src','img/adolescente-masc.jpg')
           }else if(idade >= 18 && idade <= 21){
                //Jovem

                gênero = "um <strong> jovem </strong>"
                img.setAttribute('src','img/jovem-masc.jpg')
           }else if(idade >= 22 && idade <= 39){
                //Homem

                gênero = "um <strong> homem </strong>"
                img.setAttribute('src','img/homem.jpg')
           }else if(idade >= 40 && idade <= 59){
                //Homem de meia idade

                gênero = "um <strong> homem </strong>"
                img.setAttribute('src','img/homem-meia-idade.jpg')
           }else{
                //idoso

                gênero = "um <strong> idoso </strong>"
                img.setAttribute('src','img/idoso.jpg')
           } 
        }else{
            if(idade >= 0 && idade <=4){
                //Bebê

                gênero = "um <strong>bebê</strong>"
                img.setAttribute('src','img/bebe-fem.jpg')
            }else if(idade >= 5 && idade <= 13){
                //Criança

                gênero = "uma <strong> criança </strong>"  
                img.setAttribute('src','img/crianca-fem.jpg') 
            }else if(idade >= 14 && idade <=17){
                //Adolescente

                gênero = "uma <strong> adolescente </strong>"
                img.setAttribute('src','img/adolescente-fem.jpg')
            }else if( idade >= 18 && idade <= 21){
                //Jovem

                gênero = "uma <strong> jovem </strong>"
                img.setAttribute('src','img/jovem-fem.jpg')
            }else if( idade >=22 && idade <=39){
                //Mulher

                gênero = "uma <strong> mulher </strong>"
                img.setAttribute('src','img/mulher.jpg')
            }else if( idade >= 40 && idade <= 59){
                //Mulher de meia idade

                gênero ="uma <strong> mulher </strong>"
                img.setAttribute('src','img/mulher-meia-idade.jpg')
            }else{
                //Idosa

                gênero ="uma <strong> idosa </strong>"
                img.setAttribute('src','img/idosa.jpg')
            }
        }

        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}