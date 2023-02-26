// dados do usuario

let altura = document.querySelector('input#altura')
let peso = document.querySelector('input#peso')
let resultado_imc = document.querySelector('div#result')

// dados da tabela

let abaixo_peso = document.querySelector('tr#magro')
let peso_normal = document.querySelector('tr#normal')
let sobre_peso = document.querySelector('tr#sobrepeso')
let obesidade = document.querySelector('tr#obesidade')
let obesiade_morbida = document.querySelector('tr#obesidade_morbida')


function verificador() {
    if (altura.value.length === 0 || peso.value.length === 0) {
        return true
    } else {
        return false
    }
}

function situacao(indice) {
    if (indice < 18.5) {
        abaixo_peso.style.background = '#01e2e269'
    } else if (indice >= 18.5 && indice < 25.0) {
        peso_normal.style.background = '#01e2e269'
    } else if (indice >= 25.0 && indice < 30.0) {
        sobre_peso.style.background = '#01e2e269'
    } else if (indice >= 30.0 && indice < 40) {
        obesidade.style.background = '#01e2e269'
    } else {
        obesiade_morbida.style.background = '#01e2e269'
    }
}

function calculo() {
    if (verificador()) {
        alert('Preencha todos os dados antes de calcular o IMC')
    } else {
        let imc = (Number(peso.value)) / (Number(altura.value) ** 2)
        resultado_imc.innerHTML = ` ${imc.toFixed(2)} `
        situacao(imc)
    }
}

function limpar() {
    altura.value = ''
    peso.value = ''
    resultado_imc.innerHTML = ''
}

