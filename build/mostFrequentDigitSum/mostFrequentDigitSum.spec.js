"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostFrequentDigitSum_1 = require("./mostFrequentDigitSum");
xdescribe(mostFrequentDigitSum_1.mostFrequentDigitSum.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 88;
        // act
        const response = (0, mostFrequentDigitSum_1.mostFrequentDigitSum)(data);
        // assert 
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        // arrange
        const data = 8;
        // act
        const response = (0, mostFrequentDigitSum_1.mostFrequentDigitSum)(data);
        // assert 
        expect(response).toBe(8);
    });
});
//# sourceMappingURL=mostFrequentDigitSum.spec.js.map