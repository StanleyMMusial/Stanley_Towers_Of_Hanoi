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

const movePiece = (startStack,endStack) => {
// Move the last integer on the start stack to the end of the end stack //
let poppedElement = startStack.pop()
endStack.push(poppedElement)

}

const isLegal = (startStack,endStack) => {
    console.log(endStack)
    let lastElementEnd = endStack[endStack.length - 1]
    let lastElementStart = startStack[startStack.length - 1]
}


const checkForWin = () => {

}

const towersOfHanoi = (startStack, endStack) => {
    startStack = stacks[startStack]
    endStack = stacks[endStack]
    isLegal(startStack,endStack)
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
//module.exports = movePiece;//
//module.exports = checkForWin;//
if (typeof describe === 'function') {

    describe('#towersOfHanoi()', () => {
      it('should be able to move a block', () => {
        towersOfHanoi('a', 'b');
        assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
      });
      it('movesPieces', ()=> {
         stacks = {
            a: [],
            b: [4, 3, 2, 1],
            c: []
          };

          movePiece("b","c")

          let expected = {
            a: [],
            b: [4, 3, 2],
            c: [1]
          };
          assert.deepStrictEqual(stacks,expected)
    })
    });
  } else {
  
    getPrompt();
  
  }
  
