"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const incorrectPasswordAttempts_1 = require("./incorrectPasswordAttempts");
xdescribe(incorrectPasswordAttempts_1.incorrectPasscodeAttempts.name, () => {
    it('Test 1', () => {
        // arrange
        const passcode = "1111";
        const attempts = [
            "1111", "4444",
            "9999", "3333",
            "8888", "2222",
            "7777", "0000",
            "6666", "7285",
            "5555", "1111"
        ];
        // act
        const response = (0, incorrectPasswordAttempts_1.incorrectPasscodeAttempts)(passcode, attempts);
        // assert 
        expect(response).toBe(true);
    });
});
//# sourceMappingURL=incorrectPasswordAttempts.spec.js.map