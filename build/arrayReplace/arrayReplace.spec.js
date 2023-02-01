"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayReplace_1 = require("./arrayReplace");
xdescribe(arrayReplace_1.arrayReplace.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 5, 2, 4, 5];
        const elementToReplace = 1;
        const substitutionElement = 3;
        // act
        const response = (0, arrayReplace_1.arrayReplace)(data, elementToReplace, substitutionElement);
        // assert
        expect(response).toEqual([3, 2, 3]);
    });
});
//# sourceMappingURL=arrayReplace.spec.js.map