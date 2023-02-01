"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squareDigitsSequence_1 = require("./squareDigitsSequence");
xdescribe(squareDigitsSequence_1.squareDigitsSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 16;
        // act
        const response = (0, squareDigitsSequence_1.squareDigitsSequence)(data);
        // assert 
        expect(response).toBe(9);
    });
    it('Test 2', () => {
        // arrange
        const data = 103;
        // act
        const response = (0, squareDigitsSequence_1.squareDigitsSequence)(data);
        // assert 
        expect(response).toBe(4);
    });
});
//# sourceMappingURL=squareDigitsSequence.spec.js.map