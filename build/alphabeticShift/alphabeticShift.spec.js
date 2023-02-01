"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alphabeticShift_1 = require("./alphabeticShift");
xdescribe(alphabeticShift_1.alphabeticShift.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'crazy';
        // act
        const response = (0, alphabeticShift_1.alphabeticShift)(data);
        // assert
        expect(response).toBe('dsbaz');
    });
});
//# sourceMappingURL=alphabeticShift.spec.js.map