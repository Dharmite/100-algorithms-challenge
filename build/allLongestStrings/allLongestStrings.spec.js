"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allLongestStrings_1 = require("./allLongestStrings");
xdescribe(allLongestStrings_1.allLongestStrings.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ["aba", "aa", "ad", "vcd", "aba"];
        // act
        const response = (0, allLongestStrings_1.allLongestStrings)(data);
        // assert
        expect(response).toEqual(["aba", "vcd", "aba"]);
    });
});
//# sourceMappingURL=allLongestStrings.spec.js.map