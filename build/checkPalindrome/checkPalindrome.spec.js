"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPalindrome_1 = require("./checkPalindrome");
xdescribe(checkPalindrome_1.checkPalindrome.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'aabaa';
        // act
        const response = (0, checkPalindrome_1.checkPalindrome)(data);
        // assert
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const data = 'abac';
        // act
        const response = (0, checkPalindrome_1.checkPalindrome)(data);
        // assert
        expect(response).toBe(false);
    });
    it('Test 3', () => {
        // arrange
        const data = 'a';
        // act
        const response = (0, checkPalindrome_1.checkPalindrome)(data);
        // assert
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=checkPalindrome.spec.js.map