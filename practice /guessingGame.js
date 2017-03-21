var num = 7;

while(guess !== num){
    var guess = Number(prompt("guess a number?"));
    if (guess < num){
        alert("your guess is too low");
    }
    else if(guess > num) {

        alert("your guess is too high");
    }

    else{
        alert("you guessed right!");
    }

}
