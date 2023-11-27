// ------------------
// TERNARY OPERATORS
// ------------------
// Input height - output if tall enough to ride a ride that requires 52 cm minimum tall function
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value; //gets the value that is inputted by user 
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough"; // calculates if they are tall enough to ride
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; // outputs answer
};

// ------------------
// TERNARY OPERATORS
// ------------------
// Input age - output if old enough to vote, voting requries 18+
function Age_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value; // gets value inputted by user
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough"; //calcualtes if old enough to vote
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; //outputs answer
};

// ------------------
// OBJECT-ORIENTATED OPERATORS
// ------------------

//dictionary of information of a vehicle class
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
};
// input variables for dictionary "objects" information
var Jack = new Vehicle("Dodge", "Viper", 2020,"Red"); // add new vehicle for jack - make, model, year, color
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // add new vehicle for emily - make, model, year, color
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); // add new vehicle for erik - make, model, year, color
//Output Erik's information when button is clicked
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
};


// ------------------
// OBJECT-ORIENTATED OPERATORS
// ------------------
//dictionary of information of a animal class
function Animal(Make, Breed, Age, Color) {
    this.Animal_Type = Make;
    this.Animal_Breed = Breed;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
};
// input variables for dictionary "objects" information
var Kitty = new Animal("Cat", "Tabby", 9,"Grey and Black"); // add new animal for Kitty - type, breed, age, color
var Luna = new Animal("Dog", "PitBull", 4, "Grey and White"); // add new animal for Luna - type, breed, age, color
var Squeaky = new Animal("Bird", "Parrot", 2, "Red, Blue, Yellow and Orange"); // add new animal for Squeaky - type, breed, age, color
//Output Luna's information when button is clicked
function my_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Luna is a " + Luna.Animal_Color + "-colored " + Luna.Animal_Breed + 
    " and she is " + Luna.Animal_Age + " years old.";
};


// ------------------
// NESTED FUNCTION
// ------------------
function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}