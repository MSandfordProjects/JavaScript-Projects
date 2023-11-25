
// An alert that pops up in a window
window.alert("Hello, World!");
//Write Hello, World! on the webpage
document.write('Hello, World!');

//Write the string variable on the webpage
var A = ("Test String in action");
document.write(A);


//Write the Sally variable on the webpage with coding to include quotes. Doing \" allows for quote to show without it being code
var Sally = "Sally didn't want to go to the party so she told Jake \"No thank you, but thank you for asking!\""
document.write(Sally);

//Concatenating variable
var Halloween = ("This is Halloween, this is Halloween," + " Pumpkins scream in the dead of night" + " This is Halloween, everybody make a scene");
document.write(Halloween)

var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string";
var Sent3 = (Sent1 + Sent2);
document.write(Sent3)

//Multiple Variables
var Games = "Fun!", wow = "World of Warcraft", cod = "Call of Duty", R6 = "Rainbow 6";
document.write(R6);

//Expression
document.write(3+3);


//Button Function
function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

//Mouse over event
function mouseOver(element) {
    element.style.color= "red";
}

function mouseOut(element) {
    element.style.color= "black";
}