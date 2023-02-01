"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circleOfNumbers_1 = require("./circleOfNumbers");
xdescribe(circleOfNumbers_1.circleOfNumbers.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 10;
        const firstNumber = 2;
        // act
        const response = (0, circleOfNumbers_1.circleOfNumbers)(n, firstNumber);
        // assert
        expect(response).toBe(7);
    });
});
//# sourceMappingURL=circleOfNumbers.spec.js.map