
// Function that counts down from time input by user
function countdown() {
    // assigns variable seconds inserted by user
    var seconds = document.getElementById("seconds").value;

    //ticks down seconds by 1000 milliseconds (1 second) when it hits -1 alert pops up
    function tick() {
        //count down in seconds
        seconds = seconds - 1;
        //starts timer when button is clicked showing amount input by user
        timer.innerHTML = seconds;
        //defines time to equal how long the program waits between each loop - pauses for 1000 milliseconds (1 second)
        var time = setTimeout(tick, 1000);
        //if seconds equals -1
        if (seconds == -1) {
            //popup an alert saying times up
            alert("Time's up!");
            //clear the timer
            clearTimeout(time);
            //timer now displays nothing
            timer.innerHTML = "";
        }
    }
    //perform the tick function
    tick();
}


let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
};

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


//Slideshow function to flip between images
function showSlides(n) {
    let i;
    //pulls the elements with the class "mySlides" assigning them to slides
    let slides = document.getElementsByClassName("mySlides");
    //pulls the elements with the class "dot" assigning them to dots
    let dots = document.getElementsByClassName("dot");
    // if n is greater than the amount of slides - slideIndex = 1
    if (n > slides.length) {slideIndex = 1}
    //if n is less than 1 slideindex = the amount of slides
    if (n < 1) {slideIndex = slides.length}
    //if i = 0; i less than the amount of slides; i incremented -> If thats not the slide viewed, hide slide
    for (i = 0; i < slides.length; i++) {
        //hide slide
        slides[i].style.display = "none";
    }
    //if i = 0; i less than dots amount; i incremented
    for (i = 0; i < dots.length; i++) {
        //replace the dots with classname active to ""
        dots[i].className = dots[i].className.replace(" active", "")
    }
    //slides index -1 show as block
    slides[slideIndex-1].style.display = "block";
    //dots index -1 classname active
    dots[slideIndex-1].className += " active";
}