"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alphabetSubsequence_1 = require("./alphabetSubsequence");
xdescribe(alphabetSubsequence_1.alphabetSubsequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'effg';
        // act
        const response = (0, alphabetSubsequence_1.alphabetSubsequence)(data);
        // assert
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        // arrange
        const data = 'ace';
        // act
        const response = (0, alphabetSubsequence_1.alphabetSubsequence)(data);
        // assert
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=alphabetSubSequence.spec.js.map