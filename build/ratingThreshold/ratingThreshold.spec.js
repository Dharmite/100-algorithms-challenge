"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ratingThreshold_1 = require("./ratingThreshold");
xdescribe(ratingThreshold_1.ratingThreshold.name, () => {
    it('Test 1', () => {
        // arrange
        const threshHold = 3.5;
        const ratings = [
            [3, 4],
            [3, 3, 3, 4],
            [4]
        ];
        // act
        const response = (0, ratingThreshold_1.ratingThreshold)(threshHold, ratings);
        // assert 
        expect(response).toEqual([1]);
    });
});
//# sourceMappingURL=ratingThreshold.spec.js.map