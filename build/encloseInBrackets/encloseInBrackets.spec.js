"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encloseInBrackets_1 = require("./encloseInBrackets");
xdescribe(encloseInBrackets_1.encloseInBrackets.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'abacaba';
        // act
        const response = (0, encloseInBrackets_1.encloseInBrackets)(inputString);
        // assert 
        expect(response).toBe('(abacaba)');
    });
});
//# sourceMappingURL=encloseInBrackets.spec.js.map