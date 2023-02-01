"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const confirmEnding_1 = require("./confirmEnding");
xdescribe(confirmEnding_1.confirmEnding.name, () => {
    it('Test 1', () => {
        // arrange
        const str1 = "Abstraction";
        const str2 = "action";
        // act
        const response = (0, confirmEnding_1.confirmEnding)(str1, str2);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const str1 = "Open sesame";
        const str2 = "pen";
        // act
        const response = (0, confirmEnding_1.confirmEnding)(str1, str2);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=confrimEnding.spec.js.map