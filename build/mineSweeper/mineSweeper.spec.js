"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minesweeper_1 = require("./minesweeper");
xdescribe(minesweeper_1.minesweeper.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [[true, false, false],
            [false, true, false],
            [false, false, false]];
        // act
        const response = (0, minesweeper_1.minesweeper)(matrix);
        // assert 
        expect(response).toEqual([[1, 2, 1],
            [2, 1, 1],
            [1, 1, 1]]);
    });
});
//# sourceMappingURL=mineSweeper.spec.js.map