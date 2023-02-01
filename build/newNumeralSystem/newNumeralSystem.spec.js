"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newNumeralSystem_1 = require("./newNumeralSystem");
xdescribe(newNumeralSystem_1.newNumeralSystem.name, () => {
    it('Test 1', () => {
        // arrange
        const number = 'G';
        // act
        const response = (0, newNumeralSystem_1.newNumeralSystem)(number);
        // assert 
        expect(response).toEqual(["A + G", "B + F", "C + E", "D + D"]);
    });
});
//# sourceMappingURL=newNumeralSystem.spec.js.map