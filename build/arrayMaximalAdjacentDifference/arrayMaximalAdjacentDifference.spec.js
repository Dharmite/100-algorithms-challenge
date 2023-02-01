"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayMaximalAdjacentDifference_1 = require("./arrayMaximalAdjacentDifference");
xdescribe(arrayMaximalAdjacentDifference_1.arrayMaximalAdjacentDifference.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 4, 1, 0];
        // act
        const response = (0, arrayMaximalAdjacentDifference_1.arrayMaximalAdjacentDifference)(data);
        // assert
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        // arrange
        const data = [2, 9, 1, 0];
        // act
        const response = (0, arrayMaximalAdjacentDifference_1.arrayMaximalAdjacentDifference)(data);
        // assert
        expect(response).toBe(8);
    });
});
//# sourceMappingURL=arrayMaximalAdjacentDifference.spec.js.map