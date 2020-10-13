const movePiece = require('../towers');
const checkForWin = require('../towers');
const assert = require("assert")

describe("towersOfHanoi", ()=> {
    it('movesPieces', ()=> {
        let stacks = {
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
    it('checks for win', ()=> {
        let stacks = {
            a: [4, 3, 2, 1],
            b: [],
            c: []
          };

          checkForWin();
    })
  })
