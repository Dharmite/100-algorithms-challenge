"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findClosestPair_1 = require("./findClosestPair");
xdescribe(findClosestPair_1.findClosestPair.name, () => {
    it('Test 1', () => {
        // arrange
        const numbers = [1, 0, 2, 4, 3, 0];
        const sum = 5;
        // act
        const response = (0, findClosestPair_1.findClosestPair)(numbers, sum);
        // assert 
        expect(response).toEqual(2);
    });
    it('Test 2', () => {
        // arrange
        const numbers = [2, 3, 7];
        const sum = 8;
        // act
        const response = (0, findClosestPair_1.findClosestPair)(numbers, sum);
        // assert 
        expect(response).toEqual(-1);
    });
});
//# sourceMappingURL=findCloserPair.spec.js.map