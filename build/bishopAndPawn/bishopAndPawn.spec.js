"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bishopAndPawn_1 = require("./bishopAndPawn");
xdescribe(bishopAndPawn_1.bishopAndPawn.name, () => {
    it('Test 1', () => {
        // arrange
        const position1 = 'a1';
        const position2 = 'c3';
        // act
        const response = (0, bishopAndPawn_1.bishopAndPawn)(position1, position2);
        // assert
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=bishopAndPawn.spec.js.map