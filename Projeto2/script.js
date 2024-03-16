function verificar() {
    const data = new Date()
    const ano = data.getFullYear ()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value < 0 || Number(fano.value) > ano) {
     window.alert("[ERROR] Verifique suas informações e TENTE NOVAMENTE!")
    } else {
        var fsex = document.getElementsByName("txtsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem" 
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "Foto bêbê m.jpg") 
            } else if (idade < 21) {
                img.setAttribute("src", "Foto jovem m.jpg")
            } else if (idade < 50) { 
                img.setAttribute("src", "Foto adulto m.jpg")
            } else {
                img.setAttribute("src", "Foto idoso m.jpg")
            }
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "Foto bêbê f.jpg") 
            } else if (idade < 21) {
                img.setAttribute("src", "Foto jovem f.jpg")
            } else if (idade < 50) { 
                img.setAttribute("src", "Foto adulto f.jpg")
            } else {
                img.setAttribute("src", "Foto idoso f.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}