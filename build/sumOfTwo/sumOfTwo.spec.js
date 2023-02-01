"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumOfTwo_1 = require("./sumOfTwo");
xdescribe(sumOfTwo_1.sumOfTwo.name, () => {
    it('Test 1', () => {
        // arrange
        const a = [1, 2, 3];
        const b = [10, 20, 30, 40];
        const v = 42;
        // act
        const response = (0, sumOfTwo_1.sumOfTwo)(a, b, v);
        // assert 
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=sumOfTwo.spec.js.map