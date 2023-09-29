function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    var die1Value = rollDie();
    var die2Value = rollDie();
    var total = die1Value + die2Value;

    document.getElementById('die1').textContent = 'Die 1: ' + die1Value;
    document.getElementById('die2').textContent = 'Die 2: ' + die2Value;
    document.getElementById('total').textContent = 'Total: ' + total;
}