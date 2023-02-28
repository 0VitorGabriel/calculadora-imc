// dados do usuario

const altura = document.querySelector('input#altura')
const peso = document.querySelector('input#peso')
let resultado_imc = document.querySelector('span')

// dados da tabela

let abaixo_peso = document.querySelector('tr#magro')
let peso_normal = document.querySelector('tr#normal')
let sobre_peso = document.querySelector('tr#sobrepeso')
let obesidade = document.querySelector('tr#obesidade')
let obesiade_morbida = document.querySelector('tr#obesidade_morbida')


function verificar_dados() {
    if (altura.value.length === 0 || peso.value.length === 0) {
        return true
    } else {
        return false
    }
}

function cor_situacao(indice) {
    limpa_tabela()
    if (indice < 18.5) {
        abaixo_peso.classList.add('situacao')
    } else if (indice >= 18.5 && indice < 25.0) {
        peso_normal.classList.add('situacao')
    } else if (indice >= 25.0 && indice < 30.0) {
        sobre_peso.classList.add('situacao')
    } else if (indice >= 30.0 && indice < 40) {
        obesidade.classList.add('situacao')
    } else {
        obesiade_morbida.classList.add('situacao')
    }
}

function calculo_imc() {
    if (verificar_dados()) {
        alert('Preencha todos os dados antes de calcular o IMC')
    } else {
        let imc = (Number(peso.value)) / (Number(altura.value) ** 2)
        resultado_imc.innerHTML = ` ${imc.toFixed(2)} `
        cor_situacao(imc)
    }
}

function limpar_dados() {
    altura.value = ''
    peso.value = ''
    resultado_imc.innerHTML = ''
    limpa_tabela()
}

function limpa_tabela() {
    abaixo_peso.classList.remove('situacao')
    peso_normal.classList.remove('situacao')
    sobre_peso.classList.remove('situacao')
    obesidade.classList.remove('situacao')
    obesiade_morbida.classList.remove('situacao')
}

