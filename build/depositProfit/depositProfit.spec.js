"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const depositProfit_1 = require("./depositProfit");
xdescribe(depositProfit_1.depositProfit.name, () => {
    it('Test 1', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        // act
        const response = (0, depositProfit_1.depositProfit)(deposit, rate, threshold);
        // assert 
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=depositProfit.spec.js.map