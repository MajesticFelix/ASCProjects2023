let body = document.querySelector("body");
body.style["background-color"] = "rgb(0,0,139)";

let heading1 = document.querySelector("h1");
heading1.style["font-size"] = "200%";
heading1.style["text-decoration"] = "underline";

let heading2 = document.querySelector("h2");
heading2.style["text-align"] = "center";
heading2.textContent = "Here are Pokemon's incredible Gen 1 starters!";

let startersImages = document.querySelectorAll("img");
for(let i = 0; i < startersImages.length; i++){
    startersImages[i].style["border"] = "5px dotted #ffcb03";
}

let pokemonNames = document.getElementsByClassName("pokemon_names");
for(let i = 0; i < pokemonNames.length; i++){
    pokemonNames[i].textContent = pokemonNames[i].textContent + "!";
    pokemonNames[i].style["color"] = "#fdeea6";
}

let bulbasaurContainer = document.getElementById("bulbasaur_container");
bulbasaurContainer.style["background-color"] = "#388e8e";

let footer = document.querySelector("footer")
footer.textContent = "All Star Code - DOM Project";
footer.style["font-size"] = "35px";
footer.style["font-style"] = "italic";
footer.style["text-decoration"] = "underline overline";