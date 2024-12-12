// setInterval(function(){
//     const rndomVal = Math.random();
//     console.log(Math.round(rndomVal*100+1));
// },1000)

let randomValue = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const previousGuess = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let preGuess = []
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert(`Please Enter a valid Number`);
    }else{
        preGuess.push(guess);
        displayGuess(guess);
        if(numGuess>10){
            displayMsg(`Game Over, Random number was ${randomValue}`);
            endGame();
        }else{
            checkGuess(guess);
            // numGuess++;
        }
    }
}
function checkGuess(guess){
    if(guess==randomValue) {
        displayMsg(`WellDone, You guessed it Right`);
        endGame();
    }else if(guess<randomValue) {
        displayMsg(`Number is Too less!`)
    }else {
        displayMsg(`Number is too High`);
    }
}
function displayGuess(guess){
    userInput.value='';
    previousGuess.innerHTML += `${guess} `;
    numGuess++;
    remainingSlot.innerHTML = `${11-numGuess}`;
}
function displayMsg(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">"Start New Game"</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomValue = parseInt(Math.random()*100+1);
        preGuess = [];
        numGuess = 1;
        previousGuess.innerHTML = '';
        remainingSlot.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}