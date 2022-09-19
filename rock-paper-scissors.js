const prompt = require('prompt-sync')({sigint: true});

let rock = 1;
let paper = 2;
let scissors = 3;

let winner = 0;


let choice1 = Number(prompt('Player one, please choose 1. rock, 2. paper, or 3. scissors: '));
console.log(`Player one chose: ${choice1}.`)

let choice2 = Number(prompt('Player two, please choose 1. rock, 2. paper, or 3. scissors: '));
console.log(`Player two chose ${choice2}.`)

if (choice1 === 1 && choice2 === 2){
  console.log('Paper beats Rock. Player Two wins!');

}else if (choice1 === 1 && choice2 === 3){
console.log('Rock beats Scissors, Player One wins!'); 

}else if(choice1 === 2 && choice2 === 1){
  console.log('Paper beats rock, Player One wins!');

}else if(choice1 === 2 && choice2 === 3){
  console.log('Scissors beats Paper, Player Two wins!');


}else if(choice1 === 3 && choice2 === 2){
  console.log('Scissors beats Paper, Player One wins!')  

}else if(choice1 === 3 && choice2 === 1){
  console.log('Rock beates Scissors, Player Two wins!')  


}else if(choice1 && choice1 || choice2 && choice2 || choice3 && choice3){
  console.log('This game has ended in a draw!')

}

