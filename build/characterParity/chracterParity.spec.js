"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const characterParity_1 = require("./characterParity");
xdescribe(characterParity_1.characterParity.name, () => {
    it('Test 1', () => {
        // arrange
        const data = '5';
        // act
        const response = (0, characterParity_1.characterParity)(data);
        // assert
        expect(response).toBe('odd');
    });
    it('Test 2', () => {
        // arrange
        const data = '8';
        // act
        const response = (0, characterParity_1.characterParity)(data);
        // assert
        expect(response).toBe('even');
    });
    it('Test 3', () => {
        // arrange
        const data = 'q';
        // act
        const response = (0, characterParity_1.characterParity)(data);
        // assert
        expect(response).toBe('not a digit');
    });
});
//# sourceMappingURL=chracterParity.spec.js.map