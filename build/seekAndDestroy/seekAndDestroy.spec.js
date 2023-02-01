"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seekAndDestroy_1 = require("./seekAndDestroy");
xdescribe(seekAndDestroy_1.seekAndDestroy.name, () => {
    it('Test 1', () => {
        // arrange
        const data1 = [3, 5, 1, 2, 2];
        const data2 = [2, 3, 5];
        // act
        const response = (0, seekAndDestroy_1.seekAndDestroy)(data1, data2);
        // assert 
        expect(response).toEqual([1]);
    });
    it('Test 2', () => {
        // arrange
        const data1 = [1, 2, 3, 5, 1, 2, 3];
        const data2 = [2, 3];
        // act
        const response = (0, seekAndDestroy_1.seekAndDestroy)(data1, data2);
        // assert 
        expect(response).toEqual([1, 5, 1]);
    });
});
//# sourceMappingURL=seekAndDestroy.spec.js.map