
function guess() {
    let value_user = document.getElementById('value-user').value;
    let result_game = document.getElementById('result-game');
    let number = Math.round(Math.random()*10);

    if (value_user > 10) {
        result_game.innerHTML = `Вы ввели число больше чем нужно.`;
        result_game.style.color = 'red'
    } else if (value_user == number) {
        result_game.innerHTML = `Вы угадали!`;
        result_game.style.color = 'Green'
    } else if (value_user < 1) {
        result_game.innerHTML = `Вы ввели число меньше чем нужно.`;
        result_game.style.color = 'red'
    } else {
        result_game.innerHTML = `Вы не угадали. Ваше число ${value_user}, а выпало ${number}`;
        result_game.style.color = 'black'
    }
}
