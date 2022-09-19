const prompt = require('prompt-sync')({sigint: true});

let choice1 = prompt('Player one, please choose rock, paper, or scissors: ');
console.log(`Player one chose: ${choice1}.`)

let choice2 = prompt('Player two, please choose rock, paper, or scissors: ');
console.log(`Player two chose ${choice2}.`)



if (choice1 === "rock" && choice2 === "paper"){
  console.log('Paper beats Rock. Player Two wins!');


}else if (choice1 === "rock" && choice2 === "scissors"){
console.log('Rock beats Scissors, Player One wins!'); 

}else if(choice1 === "paper" && choice2 === "rock"){
  console.log('Paper beats rock, Player One wins!');

}else if(choice1 === "paper" && choice2 === "scissors"){
  console.log('Scissors beats Paper, Player Two wins!');


}else if(choice1 === "scissors" && choice2 === "paper"){
  console.log('Scissors beats Paper, Player One wins!')  

}else if(choice1 === "scissors" && choice2 === "rock"){
  console.log('Rock beates Scissors, Player Two wins!')  

}else if(choice1 && choice2 === "rock"){
  console.log('This game has ended in a draw!')

}else if(choice1 && choice2 === "paper"){
  console.log('This game has ended in a draw!')

}else if(choice1 && choice2 === "scissors"){
  console.log('This game has ended in a draw!')

} else if (choice1 !== typeof "string" || choice2 !== typeof "string"){
  console.log("Sorry, numbers are not allowed. Please choose rock, paper or scissors. ")

}
