function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', '/teste/JS/drop/idade/imagens/fotoBebeM.jpg')
            } else if(idade < 21) {
                img.setAttribute('src' ,'/teste/JS/drop/idade/imagens/fotoJovemM.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '/teste/JS/drop/idade/imagens/fotoAdultoM.jpg')
            } else {
                img.setAttribute('src', '/teste/JS/drop/idade/imagens/fotoIdosoM.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src' ,'/teste/JS/drop/idade/imagens/fotoBebeF.jpg')
            } else if(idade < 21) {
                img.setAttribute('src' ,'/teste/JS/drop/idade/imagens/fotoJovemF.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '/teste/JS/drop/idade/imagens/fotoAdultoF.jpg')
            } else {
                img.setAttribute('src', '/teste/JS/drop/idade/imagens/fotoIdosoF.jpg') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}