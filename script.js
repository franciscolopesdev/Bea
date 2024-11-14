document.addEventListener("DOMContentLoaded", function () {
    // Data de início do relacionamento
    const inicioRelacionamento = new Date("2022-04-25"); // Formato AAAA-MM-DD
    const hoje = new Date();
    
    // Verifica se a data de início do relacionamento foi definida corretamente
    if (!isNaN(inicioRelacionamento)) {
        const diferencaDias = Math.floor((hoje - inicioRelacionamento) / (1000 * 60 * 60 * 24));
        document.getElementById("dias-juntos").innerText = `${diferencaDias} Dias de amor!`;
    } else {
        console.error("Data de início do relacionamento inválida.");
    }
});