let count = 0;

function cardCounter(card){
  switch(card) {
  case 2:
  count +=1; 
  break;
  case 3:
  count +=1;
  break;
  case 4:
  count +=1;
  break;
  case 5:
  count +=1;
  break;
  case 6:
  count +=1;
  break;
  case 7:
  count +=0;
  break;
  case 8:
  count +=0;
  break;
  case 9:
  count +=0;
  break;
  case 10:
  count -=1;
  break;
  case "J":
  count -=1;
  break;
  case "Q":
  count -=1;
  break;
  case "K":
  count -=1;
  break;
  case "A":
  count -=1;
  break;
  }
  
  let decision = count > 0 ? " Bet" : " Hold";
  return count + decision;
}

console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6));