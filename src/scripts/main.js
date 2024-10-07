const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = "";

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        descricao = 'Cuidado! Você está abaixo do peso'
    } else if ( imc >= 18.5 && imc <= 25) {
        descricao = "Você está no peso ideal!";
    } else if ( imc > 25 && imc <= 30) {
        descricao = "Cuidado! Você está com sobrepeso!";
    } else if ( imc >= 30 && imc <= 35) {
        descricao = "Cuidado! Você está com obesidade moderada!";
    } else {
        descricao = "Cuidado! Você está com obesidade morbida!";
    }

    valor.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;
})