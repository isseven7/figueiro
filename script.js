function placeBet() {
    let team = document.getElementById("team").value;
    let amount = document.getElementById("amount").value;

    if (amount <= 0 || isNaN(amount)) {
        alert("Por favor, insira um valor de aposta válido.");
        return;
    }

    let betList = document.getElementById("bet-list");
    let betItem = document.createElement("li");
    betItem.textContent = `Você apostou R$ ${amount} no ${team === 'team1' ? 'Rhuan' : 'Vitão'}.`;
    
    betList.appendChild(betItem);

    // Limpar o campo de valor de aposta
    document.getElementById("amount").value = '';
}
