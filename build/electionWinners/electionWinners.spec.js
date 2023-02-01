"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electionWinners_1 = require("./electionWinners");
xdescribe(electionWinners_1.electionsWinners.name, () => {
    it('Test 1', () => {
        // arrange
        const votes = [2, 3, 5, 2];
        const k = 3;
        // act
        const response = (0, electionWinners_1.electionsWinners)(votes, k);
        // assert 
        expect(response).toBe(2);
    });
});
//# sourceMappingURL=electionWinners.spec.js.map