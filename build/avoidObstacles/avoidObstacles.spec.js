"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const avoidObstacles_1 = require("./avoidObstacles");
xdescribe(avoidObstacles_1.avoidObstacles.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [5, 3, 6, 7, 9];
        // act
        const response = (0, avoidObstacles_1.avoidObstacles)(data);
        // assert
        expect(response).toBe(4);
    });
});
//# sourceMappingURL=avoidObstacles.spec.js.map