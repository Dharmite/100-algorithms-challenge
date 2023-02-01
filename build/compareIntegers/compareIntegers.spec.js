"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compareIntegers_1 = require("./compareIntegers");
xdescribe(compareIntegers_1.compareIntegers.name, () => {
    it('Test 1', () => {
        // arrange
        const a = "12";
        const b = "13";
        // act
        const response = (0, compareIntegers_1.compareIntegers)(a, b);
        // assert
        expect(response).toBe("less");
    });
    it('Test 2', () => {
        // arrange
        const a = "875";
        const b = "799";
        // act
        const response = (0, compareIntegers_1.compareIntegers)(a, b);
        // assert
        expect(response).toBe("greater");
    });
    it('Test 3', () => {
        // arrange
        const a = "1000";
        const b = "1000";
        // act
        const response = (0, compareIntegers_1.compareIntegers)(a, b);
        // assert
        expect(response).toBe("equal");
    });
});
//# sourceMappingURL=compareIntegers.spec.js.map