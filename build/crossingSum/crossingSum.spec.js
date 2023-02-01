"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crossingSum_1 = require("./crossingSum");
xdescribe(crossingSum_1.crossingSum.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [[1, 1, 1, 1],
            [2, 2, 2, 2],
            [3, 3, 3, 3]];
        const a = 1;
        const b = 3;
        // act
        const response = (0, crossingSum_1.crossingSum)(matrix, a, b);
        // assert 
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=crossingSum.spec.js.map