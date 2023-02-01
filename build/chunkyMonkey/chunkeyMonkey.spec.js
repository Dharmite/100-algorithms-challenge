"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chunkyMonkey_1 = require("./chunkyMonkey");
xdescribe(chunkyMonkey_1.chunkyMonkey.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ['a', 'b', 'c', 'd'];
        const length = 2;
        // act
        const response = (0, chunkyMonkey_1.chunkyMonkey)(data, length);
        // assert
        expect(response).toEqual([["a", "b"], ["c", "d"]]);
    });
    it('Test 2', () => {
        // arrange
        const data = [0, 1, 2, 3, 4, 5];
        const length = 4;
        // act
        const response = (0, chunkyMonkey_1.chunkyMonkey)(data, length);
        // assert
        expect(response).toEqual([[0, 1, 2, 3], [4, 5]]);
    });
});
//# sourceMappingURL=chunkeyMonkey.spec.js.map