"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almostIncreasingSequence_1 = require("./almostIncreasingSequence");
xdescribe(almostIncreasingSequence_1.almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 3, 2, 1];
        // act
        const response = (0, almostIncreasingSequence_1.almostIncreasingSequence)(data);
        // assert
        expect(response).toBe(false);
    });
    it('Test 2', () => {
        // arrange
        const data = [1, 3, 2];
        // act
        const response = (0, almostIncreasingSequence_1.almostIncreasingSequence)(data);
        // assert
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=almostIncreasingSequence.spec.js.map