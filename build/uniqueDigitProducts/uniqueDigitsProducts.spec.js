"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniqueDigitsProducts_1 = require("./uniqueDigitsProducts");
xdescribe(uniqueDigitsProducts_1.uniqueDigitProducts.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 8, 121, 42, 222, 23];
        // act
        const response = (0, uniqueDigitsProducts_1.uniqueDigitProducts)(data);
        // assert 
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=uniqueDigitsProducts.spec.js.map