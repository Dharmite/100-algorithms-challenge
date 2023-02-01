"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chessBoardCellColor_1 = require("./chessBoardCellColor");
xdescribe(chessBoardCellColor_1.chessBoardCellColor.name, () => {
    it('Test 1', () => {
        // arrange
        const cell1 = 'A1';
        const cell2 = 'C3';
        // act
        const response = (0, chessBoardCellColor_1.chessBoardCellColor)(cell1, cell2);
        // assert
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const cell1 = 'A1';
        const cell2 = 'H3';
        // act
        const response = (0, chessBoardCellColor_1.chessBoardCellColor)(cell1, cell2);
        // assert
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=chessBoardCellColor.spec.js.map