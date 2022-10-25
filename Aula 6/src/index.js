function executaTraducao() {
  let texto = document.getElementById("ing").value
    switch (texto) {
        case "good morning":
            return "bom dia"
            break;
        case "good afternoon":
            return "boa tarde"
            break;
        case "good night":
            return "boa noite"
            break;
        default:
            return "boa tarde"
    }
}

function traduzir() {
    document.getElementById("port").value = executaTraducao()
}