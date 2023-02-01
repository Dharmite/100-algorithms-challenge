"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayPreviousLess_1 = require("./arrayPreviousLess");
xdescribe(arrayPreviousLess_1.arrayPreviousLess.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 5, 2, 4, 5];
        // act
        const response = (0, arrayPreviousLess_1.arrayPreviousLess)(data);
        // assert
        expect(response).toEqual([-1, 3, -1, 2, 4]);
    });
});
//# sourceMappingURL=arrayPreviousLess.spec.js.map