function adicionarValor(valor) {
    document.getElementById("visor").value += valor;
}

function limparVisor() {
    document.getElementById("visor").value = "";
}

function calcularResultado() {
    try {
        document.getElementById("visor").value = eval(document.getElementById("visor").value);
    } catch (erro) {
        document.getElementById("visor").value = "Erro";
    }
}
