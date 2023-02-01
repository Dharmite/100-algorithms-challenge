"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maxMultiple_1 = require("./maxMultiple");
xdescribe(maxMultiple_1.maxMultiple.name, () => {
    it('Test 1', () => {
        // arrange
        const divisor = 3;
        const bound = 10;
        // act
        const response = (0, maxMultiple_1.maxMultiple)(divisor, bound);
        // assert 
        expect(response).toBe(9);
    });
});
//# sourceMappingURL=maxMultiple.spec.js.map