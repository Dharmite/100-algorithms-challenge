"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertString_1 = require("./convertString");
xdescribe(convertString_1.convertString.name, () => {
    it('Test 1', () => {
        // arrange
        const s = 'ceoydefthf5iyg5h5yts';
        const t = 'codefights';
        // act
        const response = (0, convertString_1.convertString)(s, t);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const s = 'addbyca';
        const t = 'abcd';
        // act
        const response = (0, convertString_1.convertString)(s, t);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=convertString.spec.js.map