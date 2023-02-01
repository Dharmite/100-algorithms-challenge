"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caseInsensitivePalindrome_1 = require("./caseInsensitivePalindrome");
xdescribe(caseInsensitivePalindrome_1.isCaseInsensitivePalindrome.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'AaBaa';
        // act
        const response = (0, caseInsensitivePalindrome_1.isCaseInsensitivePalindrome)(data);
        // assert
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const data = 'abac';
        // act
        const response = (0, caseInsensitivePalindrome_1.isCaseInsensitivePalindrome)(data);
        // assert
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=caseInsensitivePalindrome.spec.js.map