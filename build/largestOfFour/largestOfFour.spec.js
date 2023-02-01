"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const largestOfFour_1 = require("./largestOfFour");
xdescribe(largestOfFour_1.largestOfFour.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [
            [4, 5, 1, 3],
            [13, 27, 18, 26],
            [32, 35, 37, 39],
            [1000, 1001, 857, 1]
        ];
        // act
        const response = (0, largestOfFour_1.largestOfFour)(data);
        // assert 
        expect(response).toEqual([5, 27, 39, 1001]);
    });
    it('Test 2', () => {
        // arrange
        const data = [
            [4, 9, 1, 3],
            [13, 35, 18, 26],
            [32, 35, 97, 39],
            [1000000, 1001, 857, 1]
        ];
        // act
        const response = (0, largestOfFour_1.largestOfFour)(data);
        // assert 
        expect(response).toEqual([9, 35, 97, 1000000]);
    });
});
//# sourceMappingURL=largestOfFour.spec.js.map