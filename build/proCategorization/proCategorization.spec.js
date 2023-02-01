"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proCategorization_1 = require("./proCategorization");
xdescribe(proCategorization_1.proCategorization.name, () => {
    it('Test 1', () => {
        // arrange
        const pros = ["Jack", "Leon", "Maria"];
        const preferences = [["Computer repair", "Handyman", "House cleaning"],
            ["Computer lessons", "Computer repair", "Data recovery service"],
            ["Computer lessons", "House cleaning"]];
        // act
        const response = (0, proCategorization_1.proCategorization)(pros, preferences);
        // assert 
        expect(response).toEqual([[["Computer lessons"], ["Leon", "Maria"]],
            [["Computer repair"], ["Jack", "Leon"]],
            [["Data recovery service"], ["Leon"]],
            [["Handyman"], ["Jack"]],
            [["House cleaning"], ["Jack", "Maria"]]]);
    });
});
//# sourceMappingURL=proCategorization.spec.js.map