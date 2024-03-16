function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var imagem = document.getElementById("imagem")
    var msg = document.getElementById("msg")
    var img = document.createElement("img")
    img.setAttribute('id', "foto")
    if (hora >= 0 && hora < 12) {
        img.setAttribute("src", "Foto manhã.jpg")
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        img.setAttribute("src", "Foto tarde.jpg")
        document.body.style.background = "#b9846f"
    } else {
        img.setAttribute("src", "Foto noite.jpg")
        document.body.style.background = "#515154"
    }
    msg.innerHTML = `O horário atual são ${hora}:${min}`
    imagem.appendChild(img)    
} 