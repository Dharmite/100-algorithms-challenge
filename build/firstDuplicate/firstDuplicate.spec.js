"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstDuplicate_1 = require("./firstDuplicate");
xdescribe(firstDuplicate_1.firstDuplicate.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 1, 3, 5, 3, 2];
        // act
        const response = (0, firstDuplicate_1.firstDuplicate)(data);
        // assert 
        expect(response).toBe(3);
    });
    it('Test 2', () => {
        // arrange
        const data = [2, 4, 3, 5, 1];
        // act
        const response = (0, firstDuplicate_1.firstDuplicate)(data);
        // assert 
        expect(response).toBe(-1);
    });
});
//# sourceMappingURL=firstDuplicate.spec.js.map