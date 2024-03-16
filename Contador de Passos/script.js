function contagem() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var pas = document.getElementById("txtp")
    var res = document.getElementById("res")
    if (ini.value == 0 || fim.value == 0 || pas.value == 0) {
        res.innerHTML = "Impossível fazer a contagem!"
        alert("[ERROR] Dados inválidos, favor revisar as informações!")
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p < 0) {
            alert("[ERROR] Valor de passo inválido, valor 1 definido!")
            p = 1
        } 
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i > f) {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += "\u{1F4A5}"
    }
}