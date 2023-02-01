"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const integerToStringOfFixedWidth_1 = require("./integerToStringOfFixedWidth");
xdescribe(integerToStringOfFixedWidth_1.integerToStringOfFixedWidth.name, () => {
    it('Test 1', () => {
        // arrange
        const number = 1234;
        const width = 2;
        // act
        const response = (0, integerToStringOfFixedWidth_1.integerToStringOfFixedWidth)(number, width);
        // assert 
        expect(response).toBe('34');
    });
    it('Test 2', () => {
        // arrange
        const number = 1234;
        const width = 4;
        // act
        const response = (0, integerToStringOfFixedWidth_1.integerToStringOfFixedWidth)(number, width);
        // assert 
        expect(response).toBe('1234');
    });
    it('Test 3', () => {
        // arrange
        const number = 1234;
        const width = 4;
        // act
        const response = (0, integerToStringOfFixedWidth_1.integerToStringOfFixedWidth)(number, width);
        // assert 
        expect(response).toBe('01234');
    });
});
//# sourceMappingURL=integerToStringOfFixedWidth.spec.js.map