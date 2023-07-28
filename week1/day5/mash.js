function mash(){
    let home = getHome();
    let travelCount = getTravelCount();
    let pet = getPet();
    let college = getCollege();
    let occupation = getOccupation();
    if(home == "Shack" && travelCount == "50" && pet == "Rattata" && college == "Harvard University" && occupation == "Web Developer"){
        return "You got really unlucky :(";
    }
    return "You will live in a " + home + ", travel to " + travelCount + " countries, have a pet " + pet + ", attend to " + college + ", and have a future occupation of a " + occupation + "!";
}

let house = mash();
console.log(house);

function randNumGenerator(num){
    return Math.floor(Math.random()*num);
}

function getHome(){
    let randomHome = ["Mansion", "Castle", "Shack", "House"];
    if(process.argv[2] != undefined){
        return process.argv[2];
    }
    return randomHome[randNumGenerator(randomHome.length)];
}

function getTravelCount(){
    return randNumGenerator(101);
}

function getPet(){
    let randomPets = ["Pikachu", "Squirtle", "Bulbasaur", "Charmander", "Rattata"];
    if(process.argv[3] != undefined){
        let tempArr = [randomPets, process.argv[3]];
        let input = tempArr[randNumGenerator(tempArr.length)];
        if(input == process.argv[3]){
            return process.argv[3];
        } 
    }
    return randomPets[randNumGenerator(randomPets.length)];
}

function getCollege(){
    let randomCollege = ["Harvard University", "Cornell University", "Yale University", "Columbia University", "Princeton University", "Dartmouth College"];
    if(process.argv[4] != undefined){
        return process.argv[4];
    }
    return randomCollege[randNumGenerator(randomCollege.length)];
}

function getOccupation(){
    let randomOccupation = ["Software Engineer", "Web Developer", "AI Machine Builder"]
    if(process.argv[5] != undefined){
        return process.argv[5];
    }
    return randomOccupation[randNumGenerator(randomOccupation.length)];
}