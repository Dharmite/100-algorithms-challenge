"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumOddFibonacciNums_1 = require("./sumOddFibonacciNums");
xdescribe(sumOddFibonacciNums_1.sumOddFibonacciNums.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 10;
        // act
        const response = (0, sumOddFibonacciNums_1.sumOddFibonacciNums)(data);
        // assert 
        expect(response).toBe(10);
    });
    it('Test 2', () => {
        // arrange
        const data = 1000;
        // act
        const response = (0, sumOddFibonacciNums_1.sumOddFibonacciNums)(data);
        // assert 
        expect(response).toBe(1785);
    });
    it('Test 3', () => {
        // arrange
        const data = 4000000;
        // act
        const response = (0, sumOddFibonacciNums_1.sumOddFibonacciNums)(data);
        // assert 
        expect(response).toBe(4613732);
    });
});
//# sourceMappingURL=sumOddFibonacciNums.spec.js.map