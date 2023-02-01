"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumAllPrimes_1 = require("./sumAllPrimes");
xdescribe(sumAllPrimes_1.sumAllPrimes.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 10;
        // act
        const response = (0, sumAllPrimes_1.sumAllPrimes)(data);
        // assert 
        expect(response).toBe(17);
    });
    it('Test 2', () => {
        // arrange
        const data = 977;
        // act
        const response = (0, sumAllPrimes_1.sumAllPrimes)(data);
        // assert 
        expect(response).toBe(73156);
    });
});
//# sourceMappingURL=sumAllPrimes.spec.js.map