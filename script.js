
window.onload = function(){
const chosenNum = Math.floor(Math.random() * 101) + 1;
console.log(chosenNum);

let submit = document.getElementById('submit');
let guessBox = document.getElementById('guess-box')
let guessesList = [];
let userGuess = document.getElementById('guess-box').value

function getGuess(){
    userGuess = document.getElementById('guess-box').value
    
    guessesList.push(userGuess);
    
    let distanceMessage = '';
    let myBorderColor = '';
    let upOrDown = '';

    let distance = userGuess - chosenNum;
    if (distance < 0) {
        distance *= -1;
    }
    

    if (distance === 0) {
        distanceMessage= 'YOU GOT IT!';
        
    } else if (distance < 3) {
        distanceMessage= 'burning hot!';
        myBorderColor = '#FF547C'
    } else if (distance < 5) {
        distanceMessage= 'getting hot!';
        myBorderColor = '#FF5A00'
    } else if (distance < 10) {
        distanceMessage = 'getting warm!';
        myBorderColor = '#FFB000';
    } else if (distance < 15) {
        distanceMessage = 'getting close-ish';
        myBorderColor = '#FCFF00';
    }
    
     else {
        distanceMessage = 'far away :(' 
    }


    if (userGuess > chosenNum) {
        upOrDown = 'go lower';
    }

    else if (userGuess < chosenNum) {
        upOrDown = 'go higher';
    } else {
        upOrDown = '';
    }

    console.log(distanceMessage);

    if (guessesList.length === 1) {
    let guess1 = document.getElementById('guess-1');
    let guess1Num = document.getElementById('guess-1-num');
    let guess1Text = document.getElementById('guess-1-text');

    guess1.style.display = 'flex';
    guess1Num.innerText = `${userGuess}`;
    guess1Num.style.borderColor = myBorderColor;
    guess1Text.innerText = `${distanceMessage} ${upOrDown}`;
    guess1Text.style.color = myBorderColor;
    }

    else if (guessesList.length === 2) {
        let guess2 = document.getElementById('guess-2');
        let guess2Num = document.getElementById('guess-2-num');
        let guess2Text = document.getElementById('guess-2-text');

        guess2.style.display = 'flex';
        guess2Num.innerText = `${userGuess}`;
        guess2Num.style.borderColor = myBorderColor;
        guess2Text.innerText = `${distanceMessage} ${upOrDown}`;
        guess2Text.style.color = myBorderColor;
    }


    else if (guessesList.length === 3) {
        let guess3 = document.getElementById('guess-3');
        let guess3Num = document.getElementById('guess-3-num');
        let guess3Text = document.getElementById('guess-3-text');

        guess3.style.display = 'flex';
        guess3Num.innerText = `${userGuess}`;
        guess3Num.style.borderColor = myBorderColor;
        guess3Text.innerText = `${distanceMessage} ${upOrDown}`;
        guess3Text.style.color = myBorderColor;
    }

    else if (guessesList.length === 4) {
        let guess4 = document.getElementById('guess-4');
        let guess4Num = document.getElementById('guess-4-num');
        let guess4Text = document.getElementById('guess-4-text');

        guess4.style.display = 'flex';
        guess4Num.innerText = `${userGuess}`;
        guess4Num.style.borderColor = myBorderColor;
        guess4Text.innerText = `${distanceMessage} ${upOrDown}`;
        guess4Text.style.color = myBorderColor;
    }

    else if (guessesList.length === 5) {
        let guess5 = document.getElementById('guess-5');
        let guess5Num = document.getElementById('guess-5-num');
        let guess5Text = document.getElementById('guess-5-text');

        guess5.style.display = 'flex';
        guess5Num.innerText = `${userGuess}`;
        guess5Num.style.borderColor = myBorderColor;
        guess5Text.innerText = `${distanceMessage} ${upOrDown}`;
        guess5Text.style.color = myBorderColor;
    }
    
    userGuess = '';
}

//submit.addEventListener('click', getGuess)

guessBox.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        getGuess();
        guessBox.value = '';
    }
})
}

