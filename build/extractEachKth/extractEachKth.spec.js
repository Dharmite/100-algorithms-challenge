"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractEachKth_1 = require("./extractEachKth");
xdescribe(extractEachKth_1.extractEachKth.name, () => {
    it('Test 1', () => {
        // arrange
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const k = 3;
        // act
        const response = (0, extractEachKth_1.extractEachKth)(inputArray, k);
        // assert 
        expect(response).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});
//# sourceMappingURL=extractEachKth.spec.js.map