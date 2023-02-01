"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properNounCorrection_1 = require("./properNounCorrection");
xdescribe(properNounCorrection_1.properNounCorrection.name, () => {
    it('Test 1', () => {
        // arrange
        const noun = 'pARiS';
        // act
        const response = (0, properNounCorrection_1.properNounCorrection)(noun);
        // assert 
        expect(response).toBe('Paris');
    });
    it('Test 2', () => {
        // arrange
        const noun = 'John';
        // act
        const response = (0, properNounCorrection_1.properNounCorrection)(noun);
        // assert 
        expect(response).toBe('John');
    });
});
//# sourceMappingURL=properNounCorrection.spec.js.map