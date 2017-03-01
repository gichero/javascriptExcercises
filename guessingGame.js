var num = 7;

var guess = Number(prompt("guess a number?"));


if (guess === num){
    alert("you guessed right");
}

else if (guess < num){
    alert("your guess is too low");
}

else {
    alert("your guess is too high");
}
