"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containsCloseNums_1 = require("./containsCloseNums");
xdescribe(containsCloseNums_1.containsCloseNums.name, () => {
    it('Test 1', () => {
        // arrange
        const nums = [0, 1, 2, 3, 5, 2];
        const k = 3;
        // act
        const response = (0, containsCloseNums_1.containsCloseNums)(nums, k);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const nums = [0, 1, 2, 3, 5, 2];
        const k = 2;
        // act
        const response = (0, containsCloseNums_1.containsCloseNums)(nums, k);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=containsCloseNums.spec.js.map