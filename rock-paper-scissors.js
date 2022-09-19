const prompt = require('prompt-sync')({sigint: true});

let rock = 1;
let paper = 2;
let scissors = 3;

let winner = 0;


let choice1 = Number(prompt('Player one, please choose 1. rock, 2. paper, or 3. scissors: '));
console.log(`Player one chose: ${choice1}.`)

let choice2 = Number(prompt('Player two, please choose 1. rock, 2. paper, or 3. scissors: '));
console.log(`Player two chose ${choice2}.`)

if (choice1 && choice2){
  console.log('Paper beats Rock. Player two wins!')
}else if(choice2 && choice3){
  console.log('Scissors beats Paper, Player 3 wins!')
}else if(choice3 && choice1){
  console.log('Rock beats Scissors, Player 1 wins!')
}