"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayChange_1 = require("./arrayChange");
xdescribe(arrayChange_1.arrayChange.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 1, 1];
        // act
        const response = (0, arrayChange_1.arrayChange)(data);
        // assert
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=arrayChange.spec.js.map