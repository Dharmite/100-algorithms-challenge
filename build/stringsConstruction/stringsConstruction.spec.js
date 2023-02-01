"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringsConstruction_1 = require("./stringsConstruction");
xdescribe(stringsConstruction_1.stringsConstruction.name, () => {
    it('Test 1', () => {
        // arrange
        const a = "abc";
        const b = "abccba";
        // act
        const response = (0, stringsConstruction_1.stringsConstruction)(a, b);
        // assert 
        expect(response).toBe(2);
    });
});
//# sourceMappingURL=stringsConstruction.spec.js.map