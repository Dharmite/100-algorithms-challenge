"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isLucky_1 = require("./isLucky");
xdescribe(isLucky_1.isLucky.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 1230;
        // act
        const response = (0, isLucky_1.isLucky)(data);
        // assert 
        expect(response).toBe(true);
    });
    it('Test 2', () => {
        // arrange
        const data = 239017;
        // act
        const response = (0, isLucky_1.isLucky)(data);
        // assert 
        expect(response).toBe(false);
    });
});
//# sourceMappingURL=isLucky.spec.js.map