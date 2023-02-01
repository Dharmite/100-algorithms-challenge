"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractMatrixColumn_1 = require("./extractMatrixColumn");
xdescribe(extractMatrixColumn_1.extractMatrixColumn.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [
            [1, 1, 1, 2],
            [0, 5, 0, 4],
            [2, 1, 3, 6]
        ];
        const column = 2;
        // act
        const response = (0, extractMatrixColumn_1.extractMatrixColumn)(matrix, column);
        // assert 
        expect(response).toEqual([1, 0, 3]);
    });
});
//# sourceMappingURL=extractMatrixColumn.spec.js.map