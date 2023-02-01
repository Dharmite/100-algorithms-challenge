"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containsDuplicates_1 = require("./containsDuplicates");
xdescribe(containsDuplicates_1.containsDuplicates.name, () => {
    it('Test 1', () => {
        // arrange
        const a = [1, 2, 3, 1];
        // act
        const response = (0, containsDuplicates_1.containsDuplicates)(a);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const a = [3, 1];
        // act
        const response = (0, containsDuplicates_1.containsDuplicates)(a);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=containsDuplicates.spec.js.map