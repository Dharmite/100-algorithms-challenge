"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shapeArea_1 = require("./shapeArea");
xdescribe(shapeArea_1.shapeArea.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 2;
        // act
        const response = (0, shapeArea_1.shapeArea)(n);
        // assert 
        expect(response).toBe(5);
    });
    it('Test 2', () => {
        // arrange
        const n = 3;
        // act
        const response = (0, shapeArea_1.shapeArea)(n);
        // assert 
        expect(response).toBe(13);
    });
});
//# sourceMappingURL=shapeArea.spec.js.map