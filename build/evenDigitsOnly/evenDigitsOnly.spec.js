"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evenDigitsOnly_1 = require("./evenDigitsOnly");
xdescribe(evenDigitsOnly_1.evenDigitsOnly.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 248622;
        // act
        const response = (0, evenDigitsOnly_1.evenDigitsOnly)(n);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const n = 642386;
        // act
        const response = (0, evenDigitsOnly_1.evenDigitsOnly)(n);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=evenDigitsOnly.spec.js.map