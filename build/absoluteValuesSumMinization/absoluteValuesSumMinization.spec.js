"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const absoluteValuesSumMinization_1 = require("./absoluteValuesSumMinization");
xdescribe(absoluteValuesSumMinization_1.absoluteValuesSumMinimization.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 4, 7];
        // act
        const response = (0, absoluteValuesSumMinization_1.absoluteValuesSumMinimization)(data);
        // assert
        expect(response).toBe(4);
    });
    it('Test 2', () => {
        // arrange
        const data = [2, 4, 7, 6];
        // act
        const response = (0, absoluteValuesSumMinization_1.absoluteValuesSumMinimization)(data);
        // assert
        expect(response).toBe(4);
    });
    it('Test 3', () => {
        // arrange
        const data = [2, 4, 7, 6, 6];
        // act
        const response = (0, absoluteValuesSumMinization_1.absoluteValuesSumMinimization)(data);
        // assert
        expect(response).toBe(7);
    });
    it('Test 4', () => {
        // arrange
        const data = [2, 4, 7, 6, 6, 8];
        // act
        const response = (0, absoluteValuesSumMinization_1.absoluteValuesSumMinimization)(data);
        // assert
        expect(response).toBe(7);
    });
});
//# sourceMappingURL=absoluteValuesSumMinization.spec.js.map