
var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var css = document.querySelector("h3");

var body = document.getElementById("background gradient");

// console.log("color1");

// console.log("color2");

// console.log("css");

var BGgradient = function(){
    body.style.background = "linear-gradient(to left, " + color1.value + ", "+ color2.value +")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", BGgradient);


color2.addEventListener("input", BGgradient);


// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
// })


// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to left, " + color2.value + ", " + color1.value + ")";
// })