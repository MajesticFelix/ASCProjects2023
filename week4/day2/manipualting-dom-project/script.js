let pCount = 0;
let imgCount = 0;
let nCount = 0;
const pButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");
const nothingButton = document.getElementById("nothing-button");
const pDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");
const paragraphCount = document.getElementById("pCount");
const imageCount = document.getElementById("imgCount");
const nothingCount = document.getElementById("nothingCount");
const body = document.querySelector("body");

//Create nothing div
const newDiv = document.createElement("div");
newDiv.id = "nothing-div";
newDiv.style.width = "600px";
newDiv.style.minHeight = "300px";
newDiv.style.border = "3px solid black";
body.appendChild(newDiv); 
const nothingDiv = document.getElementById("nothing-div");

pButton.onclick = function(){
    pDiv.style.display = "block";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "none";
    const newParagraph = document.createElement("p");
    newParagraph.innerText = "This is a text.";
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.color = "yellow";
    pDiv.appendChild(newParagraph);
    pCount++;
    paragraphCount.innerText = `pCount: ${pCount}`;
}

imgButton.onclick = function(){
    pDiv.style.display = "none";
    imgDiv.style.display = "block";
    nothingDiv.style.display = "none";
    const newImg = document.createElement("img");
    newImg.src = "squirtle.png";
    newImg.style.width = "150px";
    imgDiv.appendChild(newImg);
    imgCount++;
    imageCount.innerText = `imgCount: ${imgCount}`;
}

nothingButton.onclick = function(){
    pDiv.style.display = "none";
    imgDiv.style.display = "none";
    nothingDiv.style.display = "block";
    nCount++;
    nothingCount.innerText = `nothingCount: ${nCount}` 
}