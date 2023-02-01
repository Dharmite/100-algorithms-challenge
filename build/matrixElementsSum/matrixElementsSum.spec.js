"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matrixElementsSum_1 = require("./matrixElementsSum");
xdescribe(matrixElementsSum_1.matrixElementsSum.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [
            [0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3]
        ];
        // act
        const response = (0, matrixElementsSum_1.matrixElementsSum)(matrix);
        // assert 
        expect(response).toBe(9);
    });
});
//# sourceMappingURL=matrixElementsSum.spec.js.map