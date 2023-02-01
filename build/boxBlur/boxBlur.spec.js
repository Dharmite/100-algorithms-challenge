"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boxBlur_1 = require("./boxBlur");
xdescribe(boxBlur_1.boxBlur.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [[1, 1, 1],
            [1, 7, 1],
            [1, 1, 1]];
        // act
        const response = (0, boxBlur_1.boxBlur)(data);
        // assert
        expect(response).toEqual([[1]]);
    });
});
//# sourceMappingURL=boxBlur.spec.js.map