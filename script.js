
window.onload = function(){
const chosenNum = Math.floor(Math.random() * 101) + 1;
console.log(chosenNum);

let submit = document.getElementById('submit');
let guessBox = document.getElementById('guess-box')
let guessesList = [];
let userGuess = document.getElementById('guess-box').value
let enter = document.getElementById('enter-to-submit');

function getGuess(){
    userGuess = document.getElementById('guess-box').value

    if (userGuess < 1 || userGuess > 100) {
        alert('sorry! must enter a number between 1-100');
    } else {

    guessesList.push(userGuess);
    
    let distanceMessage = '';
    let myBorderColor = '';
    let upOrDown = '';

    let distance = userGuess - chosenNum;
    if (distance < 0) {
        distance *= -1;
    }
    

    if (distance === 0) {
        distanceMessage= 'GOOD JOB! YOU GOT IT!';
        guessBox.style.display = 'none';
        enter.innerText = 'GAME OVER! REFRESH PAGE TO PLAY AGAIN'
        myBorderColor= '#54EAFF';

        
    } else if (distance < 3) {
        distanceMessage= 'burning hot!';
        myBorderColor = '#FF547C';
    } else if (distance < 5) {
        distanceMessage= 'getting hot!';
        myBorderColor = '#FF5A00';
    } else if (distance < 10) {
        distanceMessage = 'getting warm!';
        myBorderColor = '#FFB000';
    } else if (distance < 15) {
        distanceMessage = 'getting close-ish, ';
        myBorderColor = '#FCFF00';
    }
    
     else {
        distanceMessage = 'far away :('; 
    }


    if (userGuess > chosenNum) {
        upOrDown = 'go lower';
    }

    else if (userGuess < chosenNum) {
        upOrDown = 'go higher';
    } else {
        upOrDown = '';
    }

    

    let guessLength = guessesList.length;

    let currentGuess = document.getElementById(`guess-${guessLength}`);
    let currentGuessNum = document.getElementById(`guess-${guessLength}-num`);
    let currentGuessText = document.getElementById(`guess-${guessLength}-text`);

   
    currentGuess.style.display = 'flex';
    currentGuessNum.innerText = `${userGuess}`;
    currentGuessNum.style.borderColor = myBorderColor;

    if (guessesList.length === 5 && distance != 0) {
        currentGuessText.innerText = `SORRY, YOU LOSE! `; 
        guessBox.style.display = 'none';
        document.getElementById('answer').style.display = 'flex';
        document.getElementById('answer').innerText = `THE CORRECT ANSWER IS ${chosenNum}`;
        enter.innerText = 'GAME OVER! REFRESH TO PLAY AGAIN'

    } else if (distance != 0) {
    currentGuessText.innerText = `${distanceMessage} ${upOrDown}`;
    } else {
        currentGuessText.innerText = `${distanceMessage}`
    }
    currentGuessText.style.color = myBorderColor;
    
    userGuess = '';
}
}

//submit.addEventListener('click', getGuess)

if (guessesList.length < 5) {
guessBox.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        getGuess();
        guessBox.value = '';
    }
})
}
}
