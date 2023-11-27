function my_Dictionary() {
    var animal = {
        Species : "Chicken",
        Color : "Brown",
        Age : 1,
        Sound : "cluck-cluck-cluck",
    };
    delete animal.Sound; // deletes the sound KVP from the dictionary above
    document.getElementById("Dictionary").innerHTML = animal.Sound; // results in undefined since the KVP animal.Sound was deleted
};