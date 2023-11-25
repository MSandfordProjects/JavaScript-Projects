//Button Function
function My_First_Function() {
    var str = "You lost the game!"; // Variable 1 - button text when clicked
    var btext = document.getElementById("Button_Text"); // variable 2 - grab element
    btext.style.color = 'red'; //change text to red
    btext.innerHTML = str; // make text when clicked variable 1
};

//Function using += operator
function myFunction() {
    var sentence = "I am learning"; //variable 1
    sentence += " a lot from this course!"; // concatenate variable using += operator
    document.getElementById("Concatenate").innerHTML = sentence;
};


// Own Function and document.getElementById
function adding() {
    var question = document.getElementById("added_Eg"); //Grab Element
    var answer = (389 * 428); // Text change variable
    question.innerHTML = answer; // Text change
}