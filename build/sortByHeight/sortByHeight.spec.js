"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortByHeight_1 = require("./sortByHeight");
xdescribe(sortByHeight_1.sortByHeight.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [-1, 150, 190, 170, -1, -1, 160, 180];
        // act
        const response = (0, sortByHeight_1.sortByHeight)(data);
        // assert 
        expect(response).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
    });
});
//# sourceMappingURL=sortByHeight.spec.js.map