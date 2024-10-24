const guessNumber = document.getElementById('guess_number');
const button = document.getElementById('check');
const setMessage = document.getElementById('message');
const remaing = document.getElementById('total');
const guessText = document.getElementById('guess');
const generateRandom = document.getElementById('random');



const pGuess = [];
const pRandom = [];
let game = true;
let totalChange = 1;
let matchFound = 0;
let notMatchFound = 0;

button.addEventListener('click', function(e){
    e.preventDefault();
    if(game && totalChange <= 10 & totalChange > 0){
        validateGuess();
    }else{
        endGame();
        printMessage('Game is over. Please restart a game');
    }
});


function validateGuess(){
    let number = parseInt(guessNumber.value);
    if(number <= 0){
        printMessage('Number must be greater than 0');
    }else if(isNaN(number)){
        printMessage('Please enter a valid number.');
    }else{
        totalChange++;
        remaing.innerHTML = 11 - totalChange;
        pGuess.push(number);
        guessNumber.value = '';
        checkNumber(number);
    }
}

function checkNumber(number){
    const randomNumber = parseInt(Math.random() * 10 + 1);

    pRandom.push(randomNumber);
    guessText.innerHTML = `${pGuess}, `;
    generateRandom.innerHTML = `${pRandom}, `;
    
    if(number === randomNumber){
        matchFound++;
        printMessage('Your guess correct number.');
    }else{
        notMatchFound++;
        printMessage('Sorry! Please try again.');
    }
}

function printMessage(msg){
    setMessage.innerHTML = msg;
}

function endGame(){
    const button = document.createElement('button');
    button.innerText = "Restart Your Game";
    button.id = "restart";
    button.style.marginLeft = "5px";
    document.getElementById('button').appendChild(button);

    document.getElementById('check').disabled = true;
    
    document.getElementById('result').innerHTML = `Matched: ${matchFound}, Not Matched: ${notMatchFound}`
}
