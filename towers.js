'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
// Move the last integer on the start stack to the end of the end stack //
let stack1 = stacks[startStack]
console.log(stack1)
let stack2 = stacks[endStack]
let poppedElement = stack1.pop()
console.log(poppedElement)
stack2.push(poppedElement)


}

const isLegal = () => {

}

const checkForWin = () => {

}

const towersOfHanoi = (startStack, endStack) => {
    console.log(startStack)
movePiece(startStack,endStack)
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();