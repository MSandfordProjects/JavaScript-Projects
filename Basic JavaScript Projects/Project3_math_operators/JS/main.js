// division function
function mathFunction() {
    var question = document.getElementById("Math"); //Grab Element
    var answer = (146 + 92); // Text change variable
    question.innerHTML = "146 + 92 = " + answer; // Text change
};

// subtraction function
function subtractionFunction() {
    var question2 = document.getElementById("Mathsub"); //Grab Element
    var answer2 = (299 - 12); // Text change variable
    question2.innerHTML = "299 - 12 = " + answer2; // Text change
};

// division function
function divisionFunction() {
    var question3 = document.getElementById("Mathdiv"); //Grab Element
    var answer3 = (38/2); // Text change variable
    question3.innerHTML = "38/2 = " + answer3; // Text change
};

// multiplication function
function mutiplicationFunction() {
    var question4 = document.getElementById("Mathmult"); //Grab Element
    var answer4 = (38*2); // Text change variable
    question4.innerHTML = "38*2 = " + answer4; // Text change
};

// multiple operators function
function moremathFunction() {
    var question5 = document.getElementById("Mathmore"); //Grab Element
    var answer5 = (38*2) + (2 - 5) / (12 - 4); // Text change variable
    question5.innerHTML = "(38*2) + (2 - 5) / (12 - 4) = " + answer5; // Text change
};

// modulous operators function
function modulousOperator() {
    var question6 = document.getElementById("ModulousOperator"); //Grab Element
    var answer6 = (59 % 7); // Text change variable
    question6.innerHTML = "You get a remainder of: " + answer6; // Text change
};

// increment function
function incrementFunction() {
    var question7 = document.getElementById("Mathincrement"); //Grab Element
    var answer7 = 9; // Text change variable
    answer7++;
    question7.innerHTML = "The answer is: " + answer7; // Text change
};

// decrement function
function decrementFunction() {
    var question8 = document.getElementById("Mathdecrement"); //Grab Element
    var answer8 = 9; // Text change variable
    answer8--;
    question8.innerHTML = "The answer is: " + answer8; // Text change
};

//math random
function randFunction() {
var question9 = document.getElementById("Mathrandom"); //Grab Element
var answer9 = (Math.random() * 100) // get random number from 0-100
question9.innerHTML = "Your lucky number is: " + answer9; // text random number
};

// decrement function
function objectFunction() {
    var question10 = document.getElementById("Mathobject"); //Grab Element
    var answer10 = Math.pow(12, 3); // Text change variable
    question10.innerHTML = "The answer is: " + answer10; // Text change
};