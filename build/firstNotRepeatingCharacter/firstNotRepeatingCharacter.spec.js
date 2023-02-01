"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstNotRepeatingCharacter_1 = require("./firstNotRepeatingCharacter");
xdescribe(firstNotRepeatingCharacter_1.firstNotRepeatingCharacter.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'abacabad';
        // act
        const response = (0, firstNotRepeatingCharacter_1.firstNotRepeatingCharacter)(data);
        // assert 
        expect(response).toBe('c');
    });
    it('Test 2', () => {
        // arrange
        const data = 'abacabaabacaba';
        // act
        const response = (0, firstNotRepeatingCharacter_1.firstNotRepeatingCharacter)(data);
        // assert 
        expect(response).toBe('_');
    });
});
//# sourceMappingURL=firstNotRepeatingCharacter.spec.js.map