"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flattenArray_1 = require("./flattenArray");
xdescribe(flattenArray_1.flattenArray.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [[["a"]], [["b"]]];
        // act
        const response = (0, flattenArray_1.flattenArray)(data);
        // assert 
        expect(response).toEqual(["a", "b"]);
    });
    it('Test 2', () => {
        // arrange
        const data = [1, [2], [3, [[4]]]];
        // act
        const response = (0, flattenArray_1.flattenArray)(data);
        // assert 
        expect(response).toEqual([1, 2, 3, 4]);
    });
});
//# sourceMappingURL=flattenArray.spec.js.map