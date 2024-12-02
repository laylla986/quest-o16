function efetuarSoma() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    let soma = num1 + num2;
    
    let resultado = document.getElementById('resultado');

    if (soma > 20) {
        soma += 8;  
    } else {
        soma -= 5;  
    }

    resultado.textContent = "O resultado é: " + soma;
}
