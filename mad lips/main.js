// Variables and Input
'use strict';

// Event listener
document.getElementById('Madbtn').addEventListener('click', displayMessage);

// Event function
function displayMessage() {
    //Input
    let lineOne = document.getElementById('inputOne').value;
    let lineTwo = document.getElementById('inputTwo').value;
    let lineThree = document.getElementById('inputThree').value;
    let lineFour = document.getElementById('inputFour').value;
    let lineFive= document.getElementById('inputFive').value;

    //Build a Message
    let message = '"There are too many ' + lineOne + ' ' + lineTwo + ' on this ' + lineThree + ' airplane!", I screamed.  “Somebody has to ' + lineFour + ' on the ' + lineFive + ' to solve this problem!"'
    

    // Output the message
    document.getElementById('message').innerHTML = message
}