// // A function to greet a user.
// function greet(name){
//     console.log("hello " + name + " nice to meet you")
// }


// greet('Lana');

// // A function to calculate the square of a number.

// function calcSquare(num){
//     console.log(num * num)
// }
// calcSquare(2);


// Task: Build a Guess the Number Game:
// Random number generation (Math.random).
// User guesses using prompt.
// Provide feedback: "Too high," "Too low," or "Correct!"

function playGame(){
    let playAgain = true;

    //intro
    let playerName = prompt("Please enter your name");
    alert(`Hello ${playerName}! This game is called 'Guess the number'. I will choose a random number from 1 to 100, you need to guess that it is. Once you have inserted your guess, I will let you know if the answer is higher or lower or correct.`)

    while (playAgain){
        //choose random number from 1-100
        let randomIndex = Math.floor(Math.random() * 100) +1;
        //initialise guess
        let guess = 0;
        //count attempts
        let attempts = 0;


        //prompt user to choose a number from 1-100 and alert and answer that 'higher or 'lower'
        while (guess !== randomIndex){
            guess = parseInt(prompt("What is your guess?"))

            //attempts increase
            attempts++;
        if (guess < 1 || guess > 100 || isNaN(guess)){
            alert("Invalid entry. Please enter a number from 1 to 100");
        } else if (guess > randomIndex) {
            alert("Try again. Your answer is too high.");
        } else if (guess < randomIndex) {
            alert("Try again. Your answer is to low.");
        } else {
            alert(`Congratulations ${playerName}. The correct answer is ${randomIndex}. You guessed it in ${attempts} attempts!`);
        }
        }
        

    playAgain = confirm("Do you want to play agin?");
    }
    alert("Thank you for playing");

}
playGame();