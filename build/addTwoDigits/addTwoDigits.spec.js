"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTwoDigits_1 = require("./addTwoDigits");
xdescribe(addTwoDigits_1.addTwoDigits.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 29;
        // act
        const response = (0, addTwoDigits_1.addTwoDigits)(data);
        // assert
        expect(response).toBe(11);
    });
});
//# sourceMappingURL=addTwoDigits.spec.js.map