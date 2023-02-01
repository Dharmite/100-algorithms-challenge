"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const houseNumbersSum_1 = require("./houseNumbersSum");
xdescribe(houseNumbersSum_1.houseNumbersSum.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [5, 1, 2, 3, 0, 1, 5, 0, 2];
        // act
        const response = (0, houseNumbersSum_1.houseNumbersSum)(data);
        // assert 
        expect(response).toBe(10);
    });
});
//# sourceMappingURL=houseNumberSum.spec.js.map