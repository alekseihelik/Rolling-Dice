function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    const die1 = rollDie();
    const die2 = rollDie();
    const total = die1 + die2;

    document.getElementById('die1').textContent = 'Die 1: ' + die1;
    document.getElementById('die2').textContent = 'Die 2: ' + die2;
    document.getElementById('total').textContent = 'Total: ' + total;
}