"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missingLetters_1 = require("./missingLetters");
xdescribe(missingLetters_1.missingLetters.name, () => {
    it('Test 1', () => {
        // arrange
        const data = "abce";
        // act
        const response = (0, missingLetters_1.missingLetters)(data);
        // assert 
        expect(response).toBe("d");
    });
    it('Test 2', () => {
        // arrange
        const data = "abcdefghjklmno";
        // act
        const response = (0, missingLetters_1.missingLetters)(data);
        // assert 
        expect(response).toBe("i");
    });
    it('Test 3', () => {
        // arrange
        const data = "abcdefghijklmnopqrstuvwxyz";
        // act
        const response = (0, missingLetters_1.missingLetters)(data);
        // assert 
        expect(response).toBe(undefined);
    });
});
//# sourceMappingURL=missingLetters.spec.js.map