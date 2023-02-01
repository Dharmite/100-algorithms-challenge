"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseAString_1 = require("./reverseAString");
xdescribe(reverseAString_1.reverseAString.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'hello';
        // act
        const response = (0, reverseAString_1.reverseAString)(inputString);
        // assert 
        expect(response).toBe('olleh');
    });
    it('Test 2', () => {
        // arrange
        const inputString = 'Howdy';
        // act
        const response = (0, reverseAString_1.reverseAString)(inputString);
        // assert 
        expect(response).toBe('Howdy');
    });
});
//# sourceMappingURL=reverseAString.spec.js.map