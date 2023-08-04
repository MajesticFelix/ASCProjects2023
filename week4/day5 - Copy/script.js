let textInterval;
let imageInterval;
let minPages = 1;
let maxPages = 5;
let currentPage = 1;
const nameText = document.getElementById("name");
const leftDivider = document.getElementById("left-divider");
const rightDivider = document.getElementById("right-divider");
const intro = document.getElementById("intro");
let imageContainer = document.createElement("div");

function createImageContainer(){
    imageContainer.id = "image-container";
    imageContainer.style.display = "flex";
    imageContainer.style.justifyContent = "center";
    imageContainer.style.alignItems = "center";
    leftDivider.appendChild(imageContainer);
}

typeWriter(nameText, "Hi, my name is Felix", 100, 1);

document.onkeydown = function(e){
    if(e.keyCode == "39"){ //Right Arrow Key
        if(currentPage != maxPages){
            currentPage++;
            clearInterval(textInterval);
            clearInterval(imageInterval);
            updatePage();
        }
    }
    if(e.keyCode == "37"){ //Left Arrow Key
        if(currentPage != minPages){
            currentPage--;
            clearInterval(textInterval);
            clearInterval(imageInterval);
            updatePage();
        }
    }
}

function updatePage(){
    if(currentPage == 1){
        nameText.innerHTML = "";
        nameText.style.display = "flex";
        typeWriter(nameText, "Hi, my name is Felix.", 100, 1);
        leftDivider.style.display = "none";
        rightDivider.style.display = "none";
        if(imageContainer){
            imageContainer.remove();
        }
    }else if(currentPage == 2){
        imageContainer = document.createElement("div");
        createImageContainer();
        const imagesData = [
            {
                id: "wave",
                src: "images/wave.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "50%",
                    maxHeight: "50%"
                }
            },
            {
                id: "valorant-logo",
                src: "images/Valorant-Logo.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "50%",
                    maxHeight: "50%"
                }
            },
            {
                id: "eighty-six-logo",
                src: "images/Eighty_Six_logo.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "50%",
                    maxHeight: "50%"
                }
            },
            {
                id: "programming-logo",
                src: "images/programming-logo.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "60%",
                    maxHeight: "60%"
                }
            }
        ];
        
        imagesData.forEach(({ id, src, styles }) => {
            const imgElement = createImage(id, src, styles);
            imageContainer.appendChild(imgElement);
        });

        const wave = document.getElementById("wave");
        const valorantLogo = document.getElementById("valorant-logo");
        const eightySixLogo = document.getElementById("eighty-six-logo");
        const programmingLogo = document.getElementById("programming-logo");
        wave.style.display = "block";
        wave.style.opacity = "0";
        valorantLogo.style.display = "none";
        valorantLogo.style.opacity = "0";
        eightySixLogo.style.display = "none";
        eightySixLogo.style.opacity = "0";
        programmingLogo.style.display = "none";
        programmingLogo.style.opacity = "0";
        intro.innerHTML = "";
        nameText.style.display = "none";
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        typeWriter(intro, "I'm a student of class 2024 in Brooklyn Technical High School. I enjoy playing video games, reading, and watching anime as hobbies. My favorite video game is Valorant as I enjoy winning money from people by being good at the game. My favorite anime is 86. It's very underrated and I highly recommend you to give the anime a try. I also enjoy coding and aspire to be a Software Engineer in the future.", 50, 2);
        clearInterval(imageInterval);
        fadeImageIn(wave, 2);
        sleep(6000).then(() =>{
            wave.style.display = "none"
            valorantLogo.style.display = "block";
            fadeImageIn(valorantLogo, 2);
        }); 
        sleep(12000).then(()=> {
            valorantLogo.style.display = "none"
            eightySixLogo.style.display = "block";
            fadeImageIn(eightySixLogo, 2);
        });
        sleep(18000).then(()=> {
            eightySixLogo.style.display = "none"
            programmingLogo.style.display = "block";
            fadeImageIn(programmingLogo, 2);
        });
    }
}

function createImage(id, src, styles) {
    const imgElement = document.createElement('img');
    imgElement.id = id;
    imgElement.src = src;
    Object.assign(imgElement.style, styles);
    return imgElement;
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function typeWriter(element, text, speed, page){
    let i = 0;
    clearInterval(textInterval);
    textInterval = setInterval(() => {
        if (i < text.length && currentPage == page) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(textInterval);
        }
    }, speed);
}

function fadeImageIn(image, page){
    clearInterval(imageInterval);
    imageInterval = setInterval(function(){
        if(image.style.opacity >= 1){
            clearInterval(imageInterval);
        }
        if(image.style.opacity < 1 && currentPage == page){
            image.style.opacity += "1";
            image.style.transition = "opacity 5s";  
        }
    }, 5);
}