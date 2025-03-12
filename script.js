function actualizarResultados() {
    let cb1 = document.getElementById('checkbox1').checked;
    let cb2 = document.getElementById('checkbox2').checked;

    actualizarElemento('andResult', cb1 && cb2);
    actualizarElemento('orResult', cb1 || cb2);
    actualizarElemento('xorResult', cb1 !== cb2);
}

function actualizarElemento(id, valor) {
    let elemento = document.getElementById(id);
    elemento.textContent = valor;

    // Cambiar color según el valor
    elemento.classList.toggle('true', valor);
    elemento.classList.toggle('false', !valor);
}

document.getElementById('checkbox1').addEventListener('change', actualizarResultados);
document.getElementById('checkbox2').addEventListener('change', actualizarResultados);
