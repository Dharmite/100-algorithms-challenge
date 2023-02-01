"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeArrayConsecutive2_1 = require("./makeArrayConsecutive2");
xdescribe(makeArrayConsecutive2_1.makeArrayConsecutive2.name, () => {
    it('Test 1', () => {
        // arrange
        const statues = [6, 2, 3, 8];
        // act
        const response = (0, makeArrayConsecutive2_1.makeArrayConsecutive2)(statues);
        // assert 
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=makeArrayConsecutive2.spec.js.map