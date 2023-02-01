"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const longestDigitsPrefix_1 = require("./longestDigitsPrefix");
xdescribe(longestDigitsPrefix_1.longestDigitsPrefix.name, () => {
    it('Test 1', () => {
        // arrange
        const data = '123aa1';
        // act
        const response = (0, longestDigitsPrefix_1.longestDigitsPrefix)(data);
        // assert 
        expect(response).toBe('123');
    });
});
//# sourceMappingURL=longestDigitsPrefix.spec.js.map