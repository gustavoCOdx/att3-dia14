function calcular() {
    let saida = document.getElementById('saida')
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let soma = peso / (altura * altura)

    if (soma <= 18.5) {
        saida.innerHTML += `<p> Seu teste deu <strong>${soma}</strong>, tafraco tu é beta. </p> `
    }
    else if (soma)
    }
}