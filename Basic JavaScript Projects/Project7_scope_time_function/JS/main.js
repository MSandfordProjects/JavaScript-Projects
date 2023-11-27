//-----------------------------------
// GLOBAL VARIABLE USAGE IN FUNCTIONS
//-----------------------------------

// Global Variable
var x = 10
//Function using Global Variable
function Add_Numbers_1() {
    document.write(20 + x + "<br>");
};
//Function using Global Variable
function Add_Numbers_2() {
    document.write(x + 100);
};
Add_Numbers_1();
Add_Numbers_2();

//-----------------------------------
// LOCAL VARIABLE USAGE IN FUNCTIONS
//-----------------------------------

//Function using local variable
function Add_Numbers_3() {
    //local variable
    var y = 10
    //output answer
    document.write(20 + y + "<br>");
};
//function attempting to use global variable
function Add_Numbers_4() {
    //doesn't output anything because y is not defined
    document.write(y + 100);
};
Add_Numbers_3();
Add_Numbers_4();

//-----------------------------------
// LOCAL VARIABLE USAGE IN FUNCTIONS
// AND USING CONSOLE TO FIND ERROR
//-----------------------------------

//Function using local variable
function Add_Numbers_3() {
    //local variable
    var a = 10
    //console output check for errors
    console.log(20 + a + "<br>");
};
//Function attempting to use global variable that isn't defined
function Add_Numbers_4() {
    //console output check for errors - returns "a is not defined"
    console.log(a + 100);
};
Add_Numbers_3();
Add_Numbers_4();


//-----------------------------------
// IF STATEMENTS
//-----------------------------------
//Function used to get the time of day
function get_Date() {
    //Returns hour in the specified date according to local time.
    //Hours are listed as integers between 0-23
    // 18 = 6PM -> 18th hour
    if (new Date().getHours() < 18) {
        //^ If the time is before 6PM, then ask "How are you today" - After 6PM displays nothing.
        document.getElementById("Greeting").innerHTML = "How are you today?";
    };
};

//Function used to get the time of day
function goodmorning() {
    //Returns hour in the specified date according to local time.
    //Hours are listed as integers between 0-23
    // 10 = 10AM
    if (new Date().getHours() < 10){
        //^ If the time is before 10AM, Display "Good Morning", if not, display nothing.
        document.getElementById("GoodMorning").innerHTML = "Good Morning.";
    };
};


//-----------------------------------
// ELSE STATEMENTS 
//-----------------------------------
//Function determining if a repair is needed or not
function Quality_Function() {
    //Get value input by user
    Quality = document.getElementById("Quality").value;
    //If that value is greater than 80 then
    if (Quality > 80) {
        //they don't need a repair
        Repair = "You don't need to repair it!"
    }
    //else, if the quality is < 80
    else {
        //they do need a repair
        Repair = "You do need to repair it!"
    }
    //output the answer to which == true
    document.getElementById("Item_Quality").innerHTML = Repair;
};

//-----------------------------------
// ELSE IF STATEMENTS 
//-----------------------------------

//Time of day Function
function Time_Function() {
    //Get your local time
    var Time = new Date().getHours();
    //variable for reply
    var Reply;
    //If the time is before noon, but after midnight
    if (Time < 12 == Time > 0) {
        //then say its morning!
        Reply = "It's morning time!";
    }
    //else, if the time is noon to 6pm
    else if (Time >= 12 == Time < 18) {
        // say its afternoon!
        Reply = "It's afternoon!";
    }
    //else, 
    else {
        //say its evening!
        Reply = "It's evening time!";
    }
    //output which one comes up true
    document.getElementById("Time_of_Day").innerHTML = Reply;
};