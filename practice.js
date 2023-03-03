
let num1 = Math.floor(Math.random() * 101) + 1;
let num2 = Math.floor(Math.random() * 101) + 1;

let distance = num1 - num2;

let distanceMessage = '';

if (distance < 0) {
    distance *= -1;
}
console.log(distance)

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

console.log(distanceMessage);

