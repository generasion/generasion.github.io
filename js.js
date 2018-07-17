var css = document.querySelector ("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient () {
    body.style.backgroundImage = 
    "linear-gradient(to right, "
     + color1.value + "80, "
    + color2.value + "80), url('background.jpg')";
    
    css.textContent = body.style.backgroundImage + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 