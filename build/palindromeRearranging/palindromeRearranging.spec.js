"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindromeRearranging_1 = require("./palindromeRearranging");
xdescribe(palindromeRearranging_1.palindromeRearranging.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'aabb';
        // act
        const response = (0, palindromeRearranging_1.palindromeRearranging)(inputString);
        // assert 
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=palindromeRearranging.spec.js.map