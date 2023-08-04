let textInterval;
let imageInterval;
let minPages = 1;
let maxPages = 7;
let currentPage = 1;
const nameText = document.getElementById("name");
const resume = document.getElementById("resume");
const leftDivider = document.getElementById("left-divider");
const rightDivider = document.getElementById("right-divider");
const textContainer = document.getElementById("textContainer");
const links = document.getElementById("links");
const links1 = document.getElementById("links1");
const links2 = document.getElementById("links2");
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
        }else if(currentPage == maxPages){
            currentPage = minPages;
        }
        clearInterval(textInterval);
        clearInterval(imageInterval);
        updatePage();
    }
    if(e.keyCode == "37"){ //Left Arrow Key
        if(currentPage != minPages){
            currentPage--;
        }else if(currentPage == minPages){
            currentPage = maxPages;
        }
        clearInterval(textInterval);
        clearInterval(imageInterval);
        updatePage();
    }
}

function updatePage(){
    if(imageContainer){
        imageContainer.remove();
    }
    if(currentPage == 1){
        nameText.innerHTML = "";
        nameText.style.display = "flex";
        typeWriter(nameText, "Hi, my name is Felix.", 100, 1);
        leftDivider.style.display = "none";
        rightDivider.style.display = "none"; 
        links.style.display = "none";
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
        textContainer.innerHTML = "";
        nameText.style.display = "none";
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        links.style.display = "none";
        typeWriter(textContainer, "I'm a student of class 2024 in Brooklyn Technical High School. I enjoy playing video games, reading, and watching anime as hobbies. My favorite video game is Valorant as I enjoy winning money from people by being good at the game. My favorite anime is 86. It's very underrated and I highly recommend you to give the anime a try. I also enjoy coding and aspire to be a Software Engineer in the future.", 50, 2);
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
    }else if(currentPage == 3){
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        links.style.display = "none";
        imageContainer = document.createElement("div");
        createImageContainer();
        imageContainer.style.width = "1000px";
        const imagesData = [
            {
                id: "bths",
                src: "images/bths.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "100%",
                    maxHeight: "100%"
                }
            },
            {
                id: "college-board",
                src: "images/collegeboard.png",
                styles: {
                    display: "none",
                    opacity: 0,
                    maxWidth: "70%",
                    maxHeight: "70%"
                }
            }
        ];
        imagesData.forEach(({ id, src, styles }) => {
            const imgElement = createImage(id, src, styles);
            imageContainer.appendChild(imgElement);
        });
        const bths = document.getElementById("bths");
        const collegeBoard = document.getElementById("college-board");
        bths.style.display = "block";
        bths.style.opacity = "0";
        collegeBoard.style.display = "none";
        collegeBoard.style.opacity = "0";
        textContainer.innerHTML = "";
        typeWriter(textContainer, "In Brooklyn Technical Highschool, I currently maintain a 4.0 GPA and a 98.45% cumulative average. The AP classes I took so far are AP Computer Science Principles and AP World History in my sopohmore year. AP Computer Science A and AP U.S. History in my junior year.", 50, 3);
        clearInterval(imageInterval);
        fadeImageIn(bths, 3);
        sleep(6000).then(() =>{
            bths.style.display = "none"
            collegeBoard.style.display = "block";
            fadeImageIn(collegeBoard, 3);
        }); 
    }else if(currentPage == 4){
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        links.style.display = "none";
        imageContainer = document.createElement("div");
        createImageContainer();
        imageContainer.style.width = "1000px";
        const imagesData = [
            {
                id: "reminders",
                src: "images/reminders.png",
                styles: {
                    display: "block",
                    opacity: 0,
                    maxWidth: "95%",
                    maxHeight: "95%"
                }
            }
        ];
        imagesData.forEach(({ id, src, styles }) => {
            const imgElement = createImage(id, src, styles);
            imageContainer.appendChild(imgElement);
        });
        const reminders = document.getElementById("reminders");
        textContainer.innerHTML = "";
        typeWriter(textContainer, "Created in Java, this was my first project for a hackathon. This reminder app is a simple Java-made user interface program where a user can input their tasks for today or in the future.", 50, 4);
        clearInterval(imageInterval);
        fadeImageIn(reminders, 4);
    }else if(currentPage == 5){
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        links.style.display = "none";
        imageContainer = document.createElement("div");
        createImageContainer();
        imageContainer.style.width = "1000px";
        const imagesData = [
            {
                id: "gradeCalculator",
                src: "images/gradeCalculator.png",
                styles: {
                    display: "block",
                    opacity: 0,
                    maxWidth: "100%",
                    maxHeight: "100%"
                }
            }
        ];
        imagesData.forEach(({ id, src, styles }) => {
            const imgElement = createImage(id, src, styles);
            imageContainer.appendChild(imgElement);
        });
        const gradeCalculator = document.getElementById("gradeCalculator");
        textContainer.innerHTML = "";
        typeWriter(textContainer, "Created in Java, this was my final project for my AP Computer Science A class. This grade calculator is a simple Java-made user interface program where a user enters their grades and weights to find their average.", 50, 5);
        clearInterval(imageInterval);
        fadeImageIn(gradeCalculator, 5);
    }else if(currentPage == 6){
        leftDivider.style.display = "flex";
        rightDivider.style.display = "flex";
        links.style.display = "none";
        imageContainer = document.createElement("div");
        createImageContainer();
        imageContainer.style.width = "1000px";
        const imagesData = [
            {
                id: "snakeGame",
                src: "images/snakeGame.png",
                styles: {
                    display: "block",
                    opacity: 0,
                    maxWidth: "100%",
                    maxHeight: "100%"
                }
            }
        ];
        imagesData.forEach(({ id, src, styles }) => {
            const imgElement = createImage(id, src, styles);
            imageContainer.appendChild(imgElement);
        });
        const snakeGame = document.getElementById("snakeGame");
        textContainer.innerHTML = "";
        typeWriter(textContainer, "Created in JavaScript, this was my first JavaScript project made with p5 functions. This game is a close replica of the famous snake game where the user can control the snake to eat apples to grow bigger all while trying to not hit themselves or the border.", 50, 6);
        clearInterval(imageInterval);
        fadeImageIn(snakeGame, 6);
    }else if(currentPage == 7){
        nameText.style.display = "none";
        leftDivider.style.display = "none";
        rightDivider.style.display = "none";
        links.style.display = "flex";
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