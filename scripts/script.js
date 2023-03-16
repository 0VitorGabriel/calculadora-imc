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

// botao de calculo 

let botao_calcular_imc = document.querySelector('input.botao')


botao_calcular_imc.addEventListener('click', function () {
    let imc = (Number(peso.value)) / (Number(altura.value) ** 2)
    resultado_imc.innerHTML = ` ${imc.toFixed(2)} `
    cor_situacao(imc)
}) 

function cor_situacao(resultado) {
    limpa_tabela()
    if (resultado < 18.5) {
        abaixo_peso.classList.add('situacao')
    } else if (resultado >= 18.5 && resultado < 25.0) {
        peso_normal.classList.add('situacao')
    } else if (resultado >= 25.0 && resultado < 30.0) {
        sobre_peso.classList.add('situacao')
    } else if (resultado >= 30.0 && resultado < 40) {
        obesidade.classList.add('situacao')
    } else if (resultado >= 40.0) {
        obesiade_morbida.classList.add('situacao')
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