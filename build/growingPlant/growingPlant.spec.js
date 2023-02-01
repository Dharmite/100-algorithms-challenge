"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const growingPlant_1 = require("./growingPlant");
xdescribe(growingPlant_1.growingPlant.name, () => {
    it('Test 1', () => {
        // arrange
        const upSpeed = 100;
        const downSpeed = 10;
        const desiredHeight = 910;
        // act
        const response = (0, growingPlant_1.growingPlant)(upSpeed, downSpeed, desiredHeight);
        // assert 
        expect(response).toBe(10);
    });
});
//# sourceMappingURL=growingPlant.spec.js.map