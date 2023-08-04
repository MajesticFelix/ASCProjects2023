const colorDisplay = document.getElementById("color-display");

const aquaButton = document.getElementById("aqua");
const tealButton = document.getElementById("teal");
const pinkButton = document.getElementById("pink");
const purpleButton = document.getElementById("purple");
const colorlessButton = document.getElementById("colorless");
const hideShowButton = document.getElementById("hide-show");
const randomButton = document.getElementById("random");

aquaButton.onclick = function(){
    colorDisplay.style.backgroundColor = "aqua";
    colorDisplay.textContent = "aqua";
}

tealButton.onclick = function(){
    colorDisplay.style.backgroundColor = "teal";
    colorDisplay.textContent = "teal";
}

pinkButton.onclick = function(){
    colorDisplay.style.backgroundColor = "pink";
    colorDisplay.textContent = "pink";
}

purpleButton.onclick = function(){
    colorDisplay.style.backgroundColor = "purple";
    colorDisplay.textContent = "purple";
}

colorlessButton.onclick = function(){
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.textContent = "colorless";
}

hideShowButton.onclick = function(){
    if(colorDisplay.style.display == "none"){
        colorDisplay.style.display = "flex";
        hideShowButton.textContent = "hide";
    }else{
        colorDisplay.style.display = "none";
        hideShowButton.textContent = "show";
    } 
}

randomButton.onclick = function(){
    let colors = ["aqua", "teal", "pink", "purple", "white"];
    let randColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.style.backgroundColor = randColor;
    if(randColor == "white"){
        colorDisplay.textContent = "colorless";
    }else{
        colorDisplay.textContent = randColor;
    }
}