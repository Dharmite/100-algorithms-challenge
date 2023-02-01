"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
xdescribe(add_1.add.name, () => {
    it('test 1', () => {
        // act
        const result = (0, add_1.add)(1, 2);
        // assert
        expect(result).toBe(3);
    });
    it('test 2', () => {
        // act
        const result = (0, add_1.add)(3, 2);
        // assert
        expect(result).toBe(5);
    });
});
xdescribe(add_1.add2.name, () => {
    // console.log(add2(2,3));
    it('test 1', () => {
        // arrange
        const data = [1, 2, 3, 4, 5];
        // act
        const result = (0, add_1.add2)(...data);
        // assert
        expect(result).toBe(15);
    });
    it('test 2', () => {
        // arrange
        const data = [2, 3];
        // act
        const result = (0, add_1.add2)(...data);
        // assert
        expect(result).toBe(5);
    });
});
//# sourceMappingURL=add.spec.js.map