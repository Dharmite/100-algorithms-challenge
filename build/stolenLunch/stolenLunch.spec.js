"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stolenLunch_1 = require("./stolenLunch");
xdescribe(stolenLunch_1.stolenLunch.name, () => {
    it('Test 1', () => {
        // arrange
        const note = "you'll n4v4r 6u4ss 8t: cdja";
        // act
        const response = (0, stolenLunch_1.stolenLunch)(note);
        // assert 
        expect(response).toBe("you'll never guess it: 2390");
    });
});
//# sourceMappingURL=stolenLunch.spec.js.map