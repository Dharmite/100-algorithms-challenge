"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adjacentElementsProduct_1 = require("./adjacentElementsProduct");
xdescribe(adjacentElementsProduct_1.adjacentElementsProduct.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 6, -2, -5, 7, 3];
        // act
        const response = (0, adjacentElementsProduct_1.adjacentElementsProduct)(data);
        // assert
        expect(response).toBe(21);
    });
});
//# sourceMappingURL=adjacentElementsProduct.spec.js.map