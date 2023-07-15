function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var bomDia = document.getElementById('Bom Dia')
    var hora = 13
    var data = new Date()
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 

    if(hora >= 0 && hora <= 5){
        //Madrugada
        img.src = 'img/manha.jpg'
        bomDia.innerHTML = `Tenha uma boa noite! `
        document.body.style.background = '#515154'
    }else if(hora >= 6 && hora <= 12 ){
        //Manhã

        bomDia.innerHTML = 'Bom dia!'
        document.body.style.background = '#edc29f'
    }else if(hora >= 12 && hora <= 16){
        //Tarde 

        bomDia.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#FFBB12'
    }else if(hora >= 16 && hora <= 18){
        //Entardecer

        msg.innerHTML = 'Boa tarde!'
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        //Noite

        img.src= 'img/noite.jpg' 
        bomDia.innerHTML = 'Boa Noite!'
        document.body.style.background = '#070D0F'
    }
}