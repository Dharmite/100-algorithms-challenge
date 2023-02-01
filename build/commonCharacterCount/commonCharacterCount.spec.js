"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonCharacterCount_1 = require("./commonCharacterCount");
xdescribe(commonCharacterCount_1.commonCharacterCount.name, () => {
    it('Test 1', () => {
        // arrange
        const s1 = 'aabcc';
        const s2 = 'adcaa';
        // act
        const response = (0, commonCharacterCount_1.commonCharacterCount)(s1, s2);
        // assert
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=commonCharacterCount.spec.js.map