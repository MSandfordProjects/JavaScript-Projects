function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    // checking for size of pizza selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            //get that size value
            var selectedSize = sizeArray[i].value;
            //text is that size with a line break
            text1 = text1+selectedSize+"<br>";
        }
    }
    //if the size is a personal pizza - the price is $6
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        //if the size is 8-bit pizza - the price is $8
    } else if (selectedSize === "8-Bit Pizza") {
        sizeTotal = 8;
        //if the size is medium pizza - the price is $10
    } else if (selectedSize === "Medium Pizza"){ 
        sizeTotal = 10
        //if the size is large pizza - the price is $14
    } else if (selectedSize === "Large Pizza"){ 
        sizeTotal = 14
        //if the size is extra-large pizza - the price is $16
    } else if (selectedSize === "Extra-Large Pizza"){ 
        sizeTotal = 16
    }
    //running total is the size total from above
    runningTotal = sizeTotal;
    //outputs Size = $_.00
    console.log(selectedSize+" = $"+sizeTotal+".00");
    //outputs Size of pizza: Size
    console.log("size text1: "+text1);
    //outputs Subtotal: $_.00
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

//this calculates the cost of toppings per how many toppings are selected
function getTopping(runningTotal,text1) {
    //these variables get the selected toppings and counts how many there is
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    //if there is less toppings than max toppings, increment
    for (var j = 0; j < toppingArray.length; j++) {
        //if topping is selected, show and put text which topping was selected.
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    } 
    //if more than one topping, -1 for 1 free topping
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal= (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong>$" + 
    runningTotal + ".00" + "</strong></h3>";
};