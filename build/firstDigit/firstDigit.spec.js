"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstDigit_1 = require("./firstDigit");
xdescribe(firstDigit_1.firstDigit.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'var_1__Int';
        // act
        const response = (0, firstDigit_1.firstDigit)(inputString);
        // assert 
        expect(response).toBe('1');
    });
    it('Test 2', () => {
        // arrange
        const inputString = 'q2q-q';
        // act
        const response = (0, firstDigit_1.firstDigit)(inputString);
        // assert 
        expect(response).toBe('2');
    });
    it('Test 3', () => {
        // arrange
        const inputString = '0ss';
        // act
        const response = (0, firstDigit_1.firstDigit)(inputString);
        // assert 
        expect(response).toBe('0');
    });
});
//# sourceMappingURL=firstDigit.spec.js.map