"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayMaxConsecutiveSum_1 = require("./arrayMaxConsecutiveSum");
xdescribe(arrayMaxConsecutiveSum_1.arrayMaxConsecutiveSum.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 3, 5, 1, 6];
        const count = 2;
        // act
        const response = (0, arrayMaxConsecutiveSum_1.arrayMaxConsecutiveSum)(data, count);
        // assert
        expect(response).toBe(8);
    });
});
//# sourceMappingURL=arrayMaxConsecutiveSum.spec.js.map