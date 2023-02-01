"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factorializeANumber_1 = require("./factorializeANumber");
xdescribe(factorializeANumber_1.factorializeANumber.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 5;
        // act
        const response = (0, factorializeANumber_1.factorializeANumber)(data);
        // assert 
        expect(response).toBe(120);
    });
    it('Test 2', () => {
        // arrange
        const data = 10;
        // act
        const response = (0, factorializeANumber_1.factorializeANumber)(data);
        // assert 
        expect(response).toBe(3628800);
    });
});
//# sourceMappingURL=factorializeANumber.spec.js.map