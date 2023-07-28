console.log(charsRemover('zhzQijAnG ejobGHn pjozGoHDF pgundefinedSoe mwvDay wabkDhUQ OcJJr vdzvhHl yWundefined ', [ "m", "D", "n", "w" ]));

function charsRemover(str, toRemove) {
  let newStr = str;
  for(let i = 0; i < toRemove.length; i++){
    newStr = newStr.replaceAll(toRemove[i], "");
  }
  return newStr;
}

  function spongebobText(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++){
      if(i % 2 == 0){
        newStr += str.substring(i, i+1).toLowerCase();
      }else{
        newStr += str.substring(i, i+1).toUpperCase();
      }
    }
    return newStr;
  }

  console.log(spongebobText("Test"));

  function lottoCheck(ticket) {
    let moneyWon = 0;
    let possibilities = ["copper", "silver", "gold", "diamond", "luckySeven"];
    let values = [100, 200, 300, 500, 777];
    for(let r = 0; r < ticket.length; r++){
      let count = 0;
      for(let c = 0; c < ticket[0].length; c++){
        if(ticket[r][0] == ticket[r][c]){
          count++;
        }
        if(count == 3){
          moneyWon += values[possibilities.indexOf(ticket[r][0])];
        }
      }
    }
    for(let c = 0; c < ticket[0].length; c++){
      let count = 0;
      for(let r = 0; r < ticket.length; r++){
        if(ticket[0][c] == ticket[r][c]){
          count++;
        }
        if(count == 3){
          moneyWon += values[possibilities.indexOf(ticket[0][c])];
        }
      }
    }
    return moneyWon;
  }

  console.log(lottoCheck([
    ['silver',  'gold',    'copper'    ],
    ['silver',  'silver',  'silver'    ],
    ['silver',  'diamond', 'luckySeven']
]));