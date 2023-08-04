const title_input = document.getElementById("title_input");
const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
const thing = document.getElementById("thing");
const adjective = document.getElementById("adjective");
const main_title = document.getElementById("main_title");
const story_result = document.getElementById("story_result");
const submitButton = document.getElementById("submit_button");

title_input.onchange = function(){
    main_title.innerText = title_input.value;
}

submitButton.onclick = function(event){
    event.preventDefault();
    if(title_input.value == "" || noun.value == "" || verb.value == "" || thing == "" || adjective.value == ""){
        alert("Please fill in all fields");
    }else{
        let adLib = `Last night I ate a ${noun.value}, and today I just had to ${verb.value}. I also saw a ${thing.value}! What a ${adjective.value} day!`;
        let form = document.querySelector(".form_container");
        form.style.opacity = "0";
        form.style.transition = "opacity 0.5s";
        setTimeout(function() {
            form.style.display = "none";
            story_result.innerText = adLib;
            story_result.style.opacity = "1";
            story_result.style.transition = "opacity 0.5s";
        }, 500);
    }
}