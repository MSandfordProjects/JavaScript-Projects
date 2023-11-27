var b = 5
var a = 5
var c = "9"
var d = 9

document.write(typeof "Elephant");
document.write(typeof 5);
document.write("40"+2);
document.write(2E310);
document.write(-2E310);
document.write(54>14);
document.write(12>14);

console.log("hi")
console.log(14>35)

document.write(255 == 255);
document.write(235 == 255);

document.write(a === b); // same value, same data type == true
document.write(b === c); // different value, different data type == false
document.write(c === d); // same value, different data type == false
document.write(d === a); // different value, same data type == false

document.write(10>5 && 15>12); // 10 is greater than 5 AND 15 is greater than 12 == true because BOTH of the statements are true.
document.write(9>11 && 10>4); // 9 is not greater than 11 AND 10 is greater than 4 == false
document.write(10>16 || 89>103); // 10 is not greater than 16 OR 89 is not greater than 103 == false
document.write(16>10 || 89>103); // 16 is greater than 10 OR 89 is not greater than 103 == true because ONE of the statements is true.



// subtraction function
function testfunction() {
    document.getElementById("test").innerHTML = 0/0; // NAN because you can't divide 0/0 - so not a number.
    
};

function truefunction() {
    document.getElementById("testtrue").innerHTML = isNaN("this is a string");
};

function falsefunction() {
    document.getElementById("testfalse").innerHTML = isNaN("12");
};

function notfunction() {
    document.getElementById("not1").innerHTML = !(10>5);
};

function not_function() {
    document.getElementById("not2").innerHTML = !(22>32);
};