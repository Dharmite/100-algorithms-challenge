"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reflectString_1 = require("./reflectString");
xdescribe(reflectString_1.reflectString.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'name';
        // act
        const response = (0, reflectString_1.reflectString)(inputString);
        // assert 
        expect(response).toBe('mznv');
    });
});
//# sourceMappingURL=reflectString.spec.js.map