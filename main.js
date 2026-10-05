function rollDice() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let die3 = Math.floor(Math.random() * 6) + 1;
    let die4 = Math.floor(Math.random() * 6) + 1;
    let die5 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("die1").value = die1;
    document.getElementById("die2").value = die2;
    document.getElementById("die3").value = die3;
    document.getElementById("die4").value = die4;
    document.getElementById("die5").value = die5;
}