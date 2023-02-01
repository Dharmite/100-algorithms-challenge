"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const largestNumber_1 = require("./largestNumber");
xdescribe(largestNumber_1.largestNumber.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 2;
        // act
        const response = (0, largestNumber_1.largestNumber)(data);
        // assert 
        expect(response).toBe(99);
    });
});
//# sourceMappingURL=largestNumber.spec.js.map