
//function to concate things together
function pandaSentence() {
    //sectioning sentence in different variables.
    var ador = " adorable,";
    var floof = " and fluffy!";
    var Panda = "Pandas are";
    var color = " black and white, ";
    //concating variables to 1 sentence
    var sentence = Panda.concat(color, ador, floof);
    //output sentence with variables together
    document.getElementById("Panda_Sentence").innerHTML = sentence;
};

//function to splice a part of a sentence
function slice_method() {
    //sentence to splice
    var Dane = "The Great Dane looked more like a horse than a dog.";
    //splice the word horse which is from character 34 to 39
    var piece = Dane.slice(34,39);
    //output spliced part
    document.getElementById("Slice").innerHTML = piece;
};

//function to change lowercase letters to uppercase
function uppercase() {
    //assign lowercase sentence
    var lower = "you clicked it!"
    // change the lowercase letters to uppercase
    var upper = lower.toUpperCase();
    //output uppercase sentence
    document.getElementById("uppercased").innerHTML = upper;
};


//search function that searches for where a data type lies in the data
function searchingFunction() {
    var sentence = "The thick foliage and intertwined vines made the hike nearly impossible."
    //find where hike is within the sentence
    var result = sentence.search("hike");
    //output where hike sits within the sentence.
    document.getElementById("search").innerHTML = "It sits after the " + result + " character in the sentence.";
};

//function turn number into string
function stringFunction() {
    //assign number to variable
    var x = 924;
    //turn that number into a string
    document.getElementById("Numbertostring").innerHTML = x.toString();
};

//function make number precise to number of specified decimals
function precisionFunction() {
    //assign number to variable
    var x = 33.1908239187
    //output number to specified number - in this case 6. 33.1908 - 8 doesn't roundup from 2
    document.getElementById("Precision").innerHTML = x.toPrecision(6);
};

//function to either turn number into string or fix by number of decimals
function fixedFunction() {
    //assign number to variable
    var x = 33.1908239187
    //output number to specified decimal places - in this case 5 decimal places - 33.19082
    document.getElementById("fixed").innerHTML = x.toFixed(5);
};

//function method return primitive value of string, does not change original string, used to convert string object to string
function valueofFunction() {
    //assign string
    var x = "Apples and Bananas"
    //output primitive value string
    document.getElementById("value").innerHTML = x.valueOf();
};