"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const differentSymbolsNaive_1 = require("./differentSymbolsNaive");
xdescribe(differentSymbolsNaive_1.differentSymbolsNaive.name, () => {
    it('Test 1', () => {
        // arrange
        const s = 'cabca';
        // act
        const response = (0, differentSymbolsNaive_1.differentSymbolsNaive)(s);
        // assert 
        expect(response).toBe(3);
    });
});
//# sourceMappingURL=differentSymbolsNaive.spec.js.map