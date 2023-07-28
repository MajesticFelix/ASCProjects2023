// Part 1 - PALINDROMES 

drawW();
drawO();
drawW();

function drawW(){
    console.log("#             #");
    console.log(" #           #");
    console.log("  #    #    #");
    console.log("   #  # #  #");
    console.log("    #    #");
    console.log();
}

function drawO(){
    console.log("      ###");
    console.log("    #     #");
    console.log("  #         #");
    console.log("#             #");
    console.log(" #           #");
    console.log("   #       #");
    console.log("      ###");
    console.log();
}

// Part 2 - DRAWING WITH FUNCTIONS

drawYoutubeSymbol();
drawBody();
drawTwitchSymbol();
drawBody();

function drawYoutubeSymbol(){
    console.log("######################");
    console.log("#                    #");
    console.log("#        |\\          #");
    console.log("#        | \\         #");
    console.log("#        | /         #");
    console.log("#        |/          #");
    console.log("#                    #");
    console.log("######################");
}

function drawTwitchSymbol(){
    console.log("######################");
    console.log("#                    #");
    console.log("#      |        |    #");
    console.log("#      |        |    #");
    console.log("#      |        |    #");
    console.log("#      |        |    #");
    console.log("#                    #");
    console.log("######################");
    console.log("     /   /");
    console.log("      / /");
    console.log("      //");
}

function drawBody(){
    console.log("         ###");
    console.log("  o      ###      o");
    console.log("   \\     ###     /");
    console.log("    \\    ###    /");
    console.log("     \\---###---/");
    console.log("         ###");
    console.log("         ###");
    console.log("         ###");
    console.log("         ###");
    console.log("        /   \\");
    console.log("       /      \\");
    console.log("    __|        |__");
}