"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const digitDegree_1 = require("./digitDegree");
xdescribe(digitDegree_1.digitDegree.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 5;
        // act
        const response = (0, digitDegree_1.digitDegree)(n);
        // assert 
        expect(response).toBe(0);
    });
    it('Test 2', () => {
        // arrange
        const n = 100;
        // act
        const response = (0, digitDegree_1.digitDegree)(n);
        // assert 
        expect(response).toBe(1);
    });
    it('Test 3', () => {
        // arrange
        const n = 91;
        // act
        const response = (0, digitDegree_1.digitDegree)(n);
        // assert 
        expect(response).toBe(1);
    });
});
//# sourceMappingURL=digitDegree.spec.js.map