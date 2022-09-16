const prompt = require('prompt-sync')({sigint: true});

let rock = true;
let paper = false;
let scissors = true;


let choice1 = Number(prompt('Player one, please choose rock, paper, or scissors: '));
console.log(`Player one chose: ${choice1}.`)

let choice2 = Number(prompt('Player two, please choose rock, paper, or scissors: '));
console.log(`Player two chose ${choice2}.`)

if (choice1 === true && choice2 === false){
  console.log('Paper beats rock. Player two wins!')
}