"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composeRanges_1 = require("./composeRanges");
xdescribe(composeRanges_1.composeRanges.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [-1, 0, 1, 2, 6, 7, 9];
        // act
        const response = (0, composeRanges_1.composeRanges)(data);
        // assert 
        expect(response).toEqual(["-1->2", "6->7", "9"]);
    });
});
//# sourceMappingURL=composeRanges.spec.js.map