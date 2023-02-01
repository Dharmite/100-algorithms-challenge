"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pigLatin_1 = require("./pigLatin");
xdescribe(pigLatin_1.pigLatin.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'glove';
        // act
        const response = (0, pigLatin_1.pigLatin)(data);
        // assert 
        expect(response).toBe('oveglay');
    });
    it('Test 2', () => {
        // arrange
        const data = 'eight';
        // act
        const response = (0, pigLatin_1.pigLatin)(data);
        // assert 
        expect(response).toBe('eightway');
    });
});
//# sourceMappingURL=pigLatin.spec.js.map