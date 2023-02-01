"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagesNumberingWithInk_1 = require("./pagesNumberingWithInk");
xdescribe(pagesNumberingWithInk_1.pagesNumberingWithInk.name, () => {
    it('Test 1', () => {
        // arrange
        const current = 21;
        const numberOfDigits = 5;
        // act
        const response = (0, pagesNumberingWithInk_1.pagesNumberingWithInk)(current, numberOfDigits);
        // assert 
        expect(response).toBe(22);
    });
    it('Test 2', () => {
        // arrange
        const current = 8;
        const numberOfDigits = 4;
        // act
        const response = (0, pagesNumberingWithInk_1.pagesNumberingWithInk)(current, numberOfDigits);
        // assert 
        expect(response).toBe(10);
    });
});
//# sourceMappingURL=pageNumberingWithInk.spec.js.map