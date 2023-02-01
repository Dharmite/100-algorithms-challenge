"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fermactor_1 = require("./fermactor");
xdescribe(fermactor_1.fermactor.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 15;
        // act
        const response = (0, fermactor_1.fermactor)(n);
        // assert 
        expect(response).toEqual([4, 1]);
    });
});
//# sourceMappingURL=fermactor.spec.js.map