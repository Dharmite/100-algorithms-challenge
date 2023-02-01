"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimalNumberOfCoins_1 = require("./minimalNumberOfCoins");
xdescribe(minimalNumberOfCoins_1.minimalNumberOfCoins.name, () => {
    it('Test 1', () => {
        // arrange
        const coins = [1, 2, 10];
        const price = 28;
        // act
        const response = (0, minimalNumberOfCoins_1.minimalNumberOfCoins)(coins, price);
        // assert 
        expect(response).toBe(6);
    });
});
//# sourceMappingURL=minimalNumberOfCoins.spec.js.map