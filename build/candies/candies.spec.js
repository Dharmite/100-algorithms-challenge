"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candies_1 = require("./candies");
xdescribe(candies_1.candies.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 3;
        const m = 9;
        // act
        const response = (0, candies_1.candies)(n, m);
        // assert
        expect(response).toBe(9);
    });
});
//# sourceMappingURL=candies.spec.js.map