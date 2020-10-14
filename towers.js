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

    if (lastElementEnd === undefined) {
        return true
    }

    else if (lastElementStart < lastElementEnd) {
        return true
    }

    else {
        return false
    }
}


const checkForWin = () => {
    let stackLength = stacks["c"].length

    if (stackLength == 4) {
        return true
    }

    else {
        return false
    }
}

const towersOfHanoi = (startStack, endStack) => {
    startStack = stacks[startStack]
    endStack = stacks[endStack]

    if (isLegal(startStack,endStack) === true) {
        movePiece(startStack,endStack)
    }

    else if (isLegal(startStack,endStack) === false) {
        console.log("Illegal move")
    }

    if (checkForWin() === true) {
        console.log("Game win!")
    }
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

          movePiece(stacks["b"],stacks["c"])

          let expected = {
            a: [],
            b: [4, 3, 2],
            c: [1]
          };
          assert.deepStrictEqual(stacks,expected)
    })
        it('isLegalTrueUndefined', () => {
            stacks = {
                a: [4, 3, 2, 1],
                b: [],
                c: []
              };
              
            let isLegalReturn = isLegal(stacks["a"],stacks["c"])

            let expected = true

            assert.strictEqual(isLegalReturn,expected)
        })
        it('isLegalFalse', () => {
            stacks = {
                a: [4, 3, 2],
                b: [],
                c: [1]
              };
              
            let isLegalReturn = isLegal(stacks["a"],stacks["c"])

            let expected = false

            assert.strictEqual(isLegalReturn,expected)
        })
        it('isLegalTrue', () => {
            stacks = {
                a: [4, 3, 1],
                b: [],
                c: [2]
              };
              
            let isLegalReturn = isLegal(stacks["a"],stacks["c"])

            let expected = true

            assert.strictEqual(isLegalReturn,expected)
        })
        it('checkForWinTrue', () => {
            stacks = {
                a: [],
                b: [],
                c: [4, 3, 2, 1]
              };

              let checkForWinReturn = checkForWin()

              let expected = true

              assert.strictEqual(checkForWinReturn,expected)
        })
        it('checkForWinFalse', () => {
            stacks = {
                a: [],
                b: [1],
                c: [4, 3, 2]
              };

              let checkForWinReturn = checkForWin()

              let expected = false

              assert.strictEqual(checkForWinReturn,expected)
        })
    });
  } else {
  
    getPrompt();
  
  }
  
