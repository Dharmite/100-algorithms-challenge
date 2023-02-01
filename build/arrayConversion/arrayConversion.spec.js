"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayConversion_1 = require("./arrayConversion");
xdescribe(arrayConversion_1.arrayConversion.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 2, 3, 4, 5, 6, 7, 8];
        // act
        const response = (0, arrayConversion_1.arrayConversion)(data);
        // assert
        expect(response).toBe(186);
    });
});
//# sourceMappingURL=arrayConversion.spec.js.map