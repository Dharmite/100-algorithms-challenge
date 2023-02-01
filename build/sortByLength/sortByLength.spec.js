"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortByLength_1 = require("./sortByLength");
xdescribe(sortByLength_1.sortByLength.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ["abc",
            "",
            "aaa",
            "a",
            "zz"];
        // act
        const response = (0, sortByLength_1.sortByLength)(data);
        // assert 
        expect(response).toEqual(["",
            "a",
            "zz",
            "abc",
            "aaa"]);
    });
});
//# sourceMappingURL=sortByLength.spec.js.map